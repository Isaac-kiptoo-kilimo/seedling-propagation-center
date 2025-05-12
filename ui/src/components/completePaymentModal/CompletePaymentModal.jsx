import Container from "./CompletePaymentModalCSS";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useCompletePaymentMutation } from "../../features/orders/orderApi";

const CompletePaymentModal = ({ setIsCompleteModalOpen, id }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);


  const [completePayment, { isLoading }] = useCompletePaymentMutation();

  const schema = yup.object().shape({
    paymentMethod: yup.string().required("Payment method is required"),
    transactionCode: yup.string().when('paymentMethod', {
      is: 'Mpesa',
      then: schema => schema.required('Transaction code is required'),
      otherwise: schema => schema.notRequired(),
    }),
    timePaid: yup.string().when('paymentMethod', {
      is: 'Mpesa',
      then: schema => schema.required('Time paid is required'),
      otherwise: schema => schema.notRequired(),
    }),
    amount: yup.number().required("Amount is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedPaymentMethod = watch('paymentMethod');

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    return;
  }

  const handleCompletePayment = async (formData) => {
    try {
      const paymentData = {
        paymentMethod: formData.paymentMethod,
        paymentDetails: {
          amount: formData.amount,
          transactionCode: formData.transactionCode,
          timePaid: formData.timePaid,
          completedBy: user ? user._id : null,
        }
      };
      
      const response = await completePayment({ 
        orderId: id, 
        paymentData 
      });
  
  
      if (response?.error) {
        reset();
        toast.error(response.error.data.message);
      } else if (response?.data) {
        if (response.data.success === true) {
          reset();
          toast.success(response.data.message);
          setTimeout(() => {
            setIsCompleteModalOpen(false);
          }, 2000);
        } else {
          reset();
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      reset();
      toast.error("Something went wrong", error.message);
    }
  };
  

  const handleCloseModal = () => {
    setIsCompleteModalOpen(false);
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="modal-overlay">
        <div className="add__category--modal">
          <div className="add__category--modal--content">
            <div className="add__category--close">
              <IoCloseCircle onClick={handleCloseModal} />
            </div>
            <h2 className="category__modal--heading">Payment</h2>
            <form
              className="add__category--form"
              data-cy="add__category--form"
              onSubmit={handleSubmit(handleCompletePayment)}
            >
              <div className="form__row">
                <label htmlFor="paymentMethod" className="form__label">
                  Payment Method
                </label>
                <select
                  {...register("paymentMethod")}
                  className="form__input"
                  id="paymentMethod"
                >
                  <option value="">-- Select a payment method --</option>
                  <option value="Cash">Cash</option>
                  <option value="Mpesa">Mpesa</option>
                </select>
                {errors.paymentMethod && (
                  <p className="errors">{errors.paymentMethod.message}</p>
                )}
              </div>

              {/* Amount is always shown */}
              <div className="dert__group--input">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  {...register("amount")}
                  data-cy="amount"
                />
                {errors.amount && (
                  <p className="errors">{errors.amount.message}</p>
                )}
              </div>

              {/* Only show Transaction Code and Time Paid if Mpesa */}
              {selectedPaymentMethod === "Mpesa" && (
                <>
                  <div className="dert__group--input">
                    <label htmlFor="transactionCode">Transaction Code</label>
                    <input
                      type="text"
                      id="transactionCode"
                      name="transactionCode"
                      placeholder="Enter transaction code"
                      {...register("transactionCode")}
                      data-cy="transactionCode"
                    />
                    {errors.transactionCode && (
                      <p className="errors">{errors.transactionCode.message}</p>
                    )}
                  </div>

                  <div className="dert__group--input">
                    <label htmlFor="timePaid">Date & Time Paid</label>
                    <input
                      type="datetime-local"
                      id="timePaid"
                      name="timePaid"
                      {...register("timePaid")}
                      data-cy="timePaid"
                    />
                    {errors.timePaid && (
                      <p className="errors">{errors.timePaid.message}</p>
                    )}
                  </div>
                </>
              )}

              <div className="add__category--btn">
                <div className="action-btn">
                  <button
                    onClick={handleCloseModal}
                    className="category__add__button--sec"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
                <div className="action-btn">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn--primary category__add__btn-pry ${
                      isLoading ? "disabled" : ""
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && isLoading ? <FaSpinner /> : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CompletePaymentModal;
