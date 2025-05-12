import { FaEdit } from "react-icons/fa";
import Container from "./PaymentMethodCSS";

const PaymentMethod = ({
  title,
  description,
  paymentNameTwo,
  paymentDescTwo,
  paymentName,
  paymentDesc,
  paybill,
  businessNoName,
  businessNo,
  accountNoName,
  accountNo,
  email,
  address,
  onEditClick,
  onSelectCOD,
  onSelectMpesa,
  isSelected
}) => {
  return (
    <Container>
      <div className="payment-methodcard">
        <div className="payment--method-header">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        {title === "Personal Information" ? (
          <div className="personal-info-content">
            <div>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Address:</strong> {address}
              </p>
            </div>
            <FaEdit className="edit-icon" onClick={onEditClick} />
          </div>
        ) : (
          <div className="payment--method-content">
            <div className="payment--on-delivery">
              <div className="payment-radio-btn">
              <input
                  type="radio"
                  name="payment"
                  id="cod"
                  className="payment-option"
                  checked={isSelected === "Cash on delivery"}
                  onClick={onSelectCOD}
                />
              </div>
              <div className="payment--method-name">
                <h5>{paymentName}</h5>
                <p>{paymentDesc}</p>
              </div>
            </div>

            <div className="payment--method-paybill">
              <div className="payment-radio-btn">
              <input
                  type="radio"
                  name="payment"
                  id="mpesa"
                  className="payment-option"
                  checked={isSelected === "Mpesa"}
                  onClick={onSelectMpesa}
                />
              </div>
              <div className="mpesa-accounts">
                <div className="payment-method-name">
                  <h5>{paymentNameTwo}</h5>
                  <p>{paymentDescTwo}</p>
                </div>
                <div className="account-number">
                  <h5>{paybill}</h5>
                  <p>
                    {businessNoName} <span>{businessNo}</span>
                  </p>
                  <p>
                    {accountNoName} <span>{accountNo}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PaymentMethod;
