import { Checkout, CheckoutInformation } from "../../components";
import Container from "./CheckoutPageCSS";
import { MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../features/orders/orderApi";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUpdateUserProfileMutation } from "../../features/auth/userApi";
import { FaSpinner } from "react-icons/fa";
import { clearCart } from "../../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authenticatedUser: user } = useSelector((store) => store.userProfile);
  console.log("user");
  const { cartItems: products, totalAmount } = useSelector(
    (store) => store.cart
  );

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    phoneNumber: yup
      .string()
      .max(13, "Invalid phone number format")
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    county: yup.string().required("County is required"),
    streetAddress: yup.string().required("Street Address is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const handleFormDataSubmit = async (data) => {
    try {
      if (user) {
        await updateUserProfile({
          _id: user._id,
          updatedUser: { ...data },
        });
      }

      const orderPayload = {
        guestInfo: user ? null : { ...data },
        products,
        placedBy: user ? user._id : null,
      };

      const orderResponse = await createOrder(orderPayload);

      if (orderResponse.error) {
        toast.error(orderResponse.error.data.message);
      } else {
        toast.success(orderResponse.data.message);
        dispatch(clearCart());

        const message = `
      Hello, I'd like to place an order:
      
      - Name: ${data.fullName}
      - Phone: ${data.phoneNumber}
      - Email: ${data.email}
      - County: ${data.county}
      - Address: ${data.streetAddress}

        *Order Items:*
      ${products
        .map((item) => `• ${item.productName} × ${item.quantity}`)
        .join("\n")}
         
         *Tracking/purchaseNumber: ${orderResponse.data.order.purchaseNumber}

         *Shipping Cost:* KES 
         *Total Cost:* KES ${totalAmount}
      `;

        const encodedMessage = encodeURIComponent(message.trim());
        const contact = import.meta.env.VITE_WHATSAPP_CONTACT;
        const waUrl = `https://wa.me/${contact}?text=${encodedMessage}`;
        window.open(waUrl, "_blank");

        setTimeout(() => {
          navigate("/shop/products");
        }, 2000);
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        theme="colored"
      />
      <div className="checkout-container-page">
        <div className="tracking--order-section">
          <div className="shopping-track-btn">
            <button>Shopping Cart</button>
            <MdChevronRight size={24} />
          </div>
          <div className="checkout--tack-btn active">
            <button>Secure Checkout</button>
            <MdChevronRight size={24} />
          </div>
          <div className="order-complete--track-btn">
            <button>Order Complete</button>
          </div>
        </div>
        <form
          className="checkout-card"
          onSubmit={handleSubmit(handleFormDataSubmit)}
        >
          <div className="checkout-information">
            <CheckoutInformation
              user={user}
              registerFullName={register("fullName")}
              registerEmail={register("email")}
              registerPhoneNumber={register("phoneNumber")}
              registerCounty={register("county")}
              registerStreetAddress={register("streetAddress")}
              setValue={setValue}
              errors={errors}
              control={control}
            />
          </div>
          <div className="checkout-order">
            <Checkout />
            <div className="cart-bottom-btns">
              <button
                className={`btn-place-order ${
                  !isValid || isLoading
                    ? "btn-place-order-disabled"
                    : "btn--primary"
                }`}
                disabled={!isValid || isLoading}
                type="submit"
              >
                {isLoading ? (
                  <span className="spinner-wrapper">
                    <FaSpinner className="spinner-icon" /> Placing Order...
                  </span>
                ) : (
                  "PLACE ORDER"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default CheckoutPage;
