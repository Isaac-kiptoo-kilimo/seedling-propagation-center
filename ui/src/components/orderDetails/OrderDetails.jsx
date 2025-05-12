import DeleteModal from "../deleteModal/DeleteModal";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Container from "./OrderDetailsCSS";
import {
  useCancelOrderMutation,
  useCompleteOrderMutation,
  useOrderInTransitMutation,
} from "../../features/orders/orderApi";
import { format } from "date-fns";
import { MdMoreVert } from "react-icons/md";
import CompletionModal from "../completionModal/CompletionModal";
import CompletePaymentModal from "../completePaymentModal/CompletePaymentModal";

const OrderDetails = ({
  _id,
  purchaseNumber,
  orderStatus,
  fulfillmentStatus,
  paymentStatus,
  placedBy,
  orderDate,
  products,
  totalAmount,
  guestInfo,
  isManage,
  isStaff,
  isAdmin,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [isInTransitModalOpen, setIsInTransitModalOpen] = useState(false);
  const [isOrderCompleteModalOpen, setIsOrderCompleteModalOpen] =
    useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const actionModalRef = useRef(null);

  const [OrderInTransit] = useOrderInTransitMutation();
  const [completeOrder] = useCompleteOrderMutation();
  const [cancelOrder] = useCancelOrderMutation();


  const handleOrderIntransit = async () => {
    try {
      const response = await OrderInTransit(_id);
      if (response && response.error) {
        toast.error(response.error.data.message);
      } else {
        if (response && response.data.success === true) {
          setIsActionModalOpen(false);
          toast.success(response.data.message);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1000);
        } else {
          toast.error(response.data.message);
          setIsActionModalOpen(false);
        }
      }
    } catch (error) {
      toast.error("An error occured when moving in transit");
    }
  };

  const handleFulfillOrder = async () => {
    try {
      const response = await completeOrder(_id);
      if (response && response.error) {
        toast.error(response.error.data.message);
      } else {
        if (response && response.data.success === true) {
          setIsActionModalOpen(false);
          toast.success(response.data.message);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1000);
        } else {
          toast.error(response.data.message);
          setIsActionModalOpen(false);
        }
      }
    } catch (error) {
      toast.error("An error occured while completing order");
    }
  };

  const handleCancelOrder = async () => {
    try {
      const response = await cancelOrder(_id);
      if (response && response.error) {
        toast.error(response.error.data.message);
      } else {
        if (response && response.data.success === true) {
          setIsActionModalOpen(false);
          toast.success(response.data.message);
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1000);
        } else {
          toast.error(response.data.message);
          setIsActionModalOpen(false);
        }
      }
    } catch (error) {
      toast.error("An error occured while Cancelling");
    }
  };
  const handleCloseActionModal = () => {
    setIsModalOpen(true);
    setIsActionModalOpen(false);
  };

  const handleOpenCompletionModal = () => {
    setIsCompleteModalOpen(true);
    setIsActionModalOpen(false);
  };

  const handleInTransitModal = () => {
    setIsInTransitModalOpen(true);
    setIsActionModalOpen(false);
  };

  const handleOpenOrderCompletionModal = () => {
    setIsOrderCompleteModalOpen(true);
    setIsActionModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionModalRef.current &&
        !actionModalRef.current.contains(event.target)
      ) {
        setIsActionModalOpen(false);
      }
    };

    if (isActionModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActionModalOpen]);

  return (
    <Container className="order__row">
      <p className="single-order__name">{index + 1}</p>
      <p className="single-order__name">
        {" "}
        {format(new Date(orderDate), "dd/MM/yyyy")}
      </p>
      <p className="single-order__name">{purchaseNumber}</p>
      <p className="single-order__name">
        {placedBy?.fullName ?? guestInfo?.fullName}
      </p>
      <div className="single-order__name">
        {products && products.map((p) => p.product.productName).join(", ")}
      </div>

      <div className="single-order__category">{paymentStatus}</div>
      <div className="single-order__description">{orderStatus}</div>
      <div className="single-order__price">{totalAmount}</div>
      <div className="single-order__offerprice">{fulfillmentStatus}</div>
      {
        !isAdmin && (
          <div className="single-order__actions">
          <button
            className="action-menu-button"
            onClick={() => setIsActionModalOpen(!isActionModalOpen)}
          >
            <MdMoreVert size={24} />
          </button>
  
          {isActionModalOpen && (
            <div className="action-modal" ref={actionModalRef}>
              {isStaff && (
                <>
                  <button onClick={handleOpenCompletionModal}>
                    Complete Payment
                  </button>
                  <button onClick={handleInTransitModal}>In transit</button>
                  <button onClick={handleOpenOrderCompletionModal}>
                    Fulfill Order
                  </button>
                </>
              )}
              <button onClick={handleCloseActionModal}>Cancel Order</button>
            </div>
          )}
        </div>
        )
      }
   

      {isCompleteModalOpen && (
        <CompletePaymentModal
          item="Payment"
          id={_id}
          action="Complete"
          setIsCompleteModalOpen={setIsCompleteModalOpen}
        />
      )} 

      {isInTransitModalOpen && (
        <CompletionModal
          handleCompletion={handleOrderIntransit}
          item="Order"
          action="Move to In Transit"
          setIsCompleteModalOpen={setIsInTransitModalOpen}
        />
      )}

      {isOrderCompleteModalOpen && (
        <CompletionModal
          handleCompletion={handleFulfillOrder}
          item="order"
          action="Complete"
          setIsCompleteModalOpen={setIsOrderCompleteModalOpen}
        />
      )}

      {isModalOpen && (
        <DeleteModal
          handleDelete={handleCancelOrder}
          item="order"
          action="Cancel"
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Container>
  );
};

export default OrderDetails;
