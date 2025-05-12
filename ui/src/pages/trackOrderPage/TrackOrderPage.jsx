import { useState } from "react";
import { FaBox, FaCheckCircle, FaShippingFast } from "react-icons/fa";
import Container from "./TrackOrderPageCSS";
import { useTrackOrdersQuery } from "../../features/orders/orderApi";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const TrackOrderPage = () => {
  const [purchaseNumberInput, setPurchaseNumberInput] = useState("");
  const [purchaseNumber, setPurchaseNumber] = useState("");

  const { data, isLoading, isError, isSuccess } = useTrackOrdersQuery(
    { purchaseNumber },
    { skip: !purchaseNumber }
  );

  const handleTrack = () => {
    setPurchaseNumber(purchaseNumberInput);
  };

  const status = data?.orderStatus.currentStatus || ""; 

  console.log("currentStatus",data?.orderStatus.currentStatus);
  
  const isOrderReceived = status === "Pending" || status === "Processing" ||  status === "InTransit" || status === "Delivered" || status === "Completed";
  const isInTransit = status === "InTransit" || status === "Delivered" || status === "Completed";
  const isDelivered = status === "Delivered" || status === "Completed";

  return (
    <Container>
      <div>
        <h1>Track Your Order</h1>

        <div className="content">
          <div className="left-side">
            <label>
              Enter your order confirmation number to track the order status
            </label>
            <input
              type="text"
              value={purchaseNumberInput}
              onChange={(e) => setPurchaseNumberInput(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>
            <p className="note">
              The order confirmation number should start with SPDXXX
            </p>

            {isLoading && <LoadingSpinner/>}
            {isError && (
              <p style={{ color: "red" }}>
                Error fetching order. Please check your confirmation number.
              </p>
            )}
          </div>

          {/* Right Side */}
          <div className="right-side">
            <div className="tracker-header">
              <h2>Seedlings Order Tracker</h2>
              {purchaseNumber && <span>{purchaseNumber}</span>}
            </div>

            {isSuccess ? (
              <>
                <p className="estimated-date">
                  <strong>Estimated Delivery Date:</strong> {data.estimatedDeliveryDate || "Unknown"}
                </p>

                <div className="timeline">
                  <div className="timeline-step">
                    <div
                      className="timeline-step-icon"
                      style={{ backgroundColor: isOrderReceived ? "green" : "#9ca3af" }}
                    >
                      <FaCheckCircle color="white" />
                    </div>
                    <h3>Order Received</h3>
                    <p>
                      Thank you for your purchase! Your order has been successfully
                      received and is now being processed.
                    </p>
                    <small>{data.orderReceivedDate || ""}</small>
                  </div>

                  <div className="timeline-step">
                    <div
                      className="timeline-step-icon"
                      style={{ backgroundColor: isInTransit ? "green" : "#9ca3af" }}
                    >
                      <FaShippingFast color="white" />
                    </div>
                    <h3>In Transit</h3>
                    <p>
                      Good news! Your order has completed packaging and is on its
                      way to you. We've carefully packed your items.
                    </p>
                    <small>{data.inTransitDate || ""}</small>
                  </div>

                  <div className="timeline-step">
                    <div
                      className="timeline-step-icon"
                      style={{ backgroundColor: isDelivered ? "green" : "#9ca3af" }}
                    >
                      <FaBox color="white" />
                    </div>
                    <h3>Delivered</h3>
                    <p>
                      Your order has arrived! We're happy to confirm that your items
                      have been delivered to their final destination.
                    </p>
                    <small>{data.deliveredDate || ""}</small>
                  </div>
                </div>
              </>
            ) : (
              <div className="timeline">
              <div className="timeline-step">
                <div
                  className="timeline-step-icon"
                  style={{ backgroundColor: isOrderReceived ? "green" : "#9ca3af" }}
                >
                  <FaCheckCircle color="white" />
                </div>
                <h3>Order Received</h3>
              </div>

              <div className="timeline-step">
                <div
                  className="timeline-step-icon"
                  style={{ backgroundColor: isInTransit ? "green" : "#9ca3af" }}
                >
                  <FaShippingFast color="white" />
                </div>
                <h3>In Transit</h3>
              </div>

              <div className="timeline-step">
                <div
                  className="timeline-step-icon"
                  style={{ backgroundColor: isDelivered ? "green" : "#9ca3af" }}
                >
                  <FaBox color="white" />
                </div>
                <h3>Delivered</h3>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrackOrderPage;
