import { useEffect, useRef, useState } from "react";
import Container from "../../pages/checkoutPage/CheckoutPageCSS";
import { counties } from "../../utils/counties/counties";
import PhoneInput from "react-phone-input-2";
import { Controller } from "react-hook-form";

const CheckoutInformation = ({
  user,
  registerFullName,
  registerEmail,
  registerPhoneNumber,
  registerCounty,
  registerStreetAddress,
  setValue,
  errors,
  control
}) => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const isInitialSet = useRef(false);
console.log("selectedCounty",selectedCounty);

  useEffect(() => {
    if (user) {
      setValue("fullName", user.fullName || "");
      setValue("email", user.email || "");
      setValue("phoneNumber", user.phoneNumber || "");
      setValue("county", user.county || "");
      setValue("streetAddress", user.streetAddress || "");
      isInitialSet.current = true;
    }
  }, [user, setValue]);

  const handleCountyChange = (e) => {
    const countyName = e.target.value;
    setSelectedCounty(countyName);
  };

const [customInputStyle, setCustomInputStyle] = useState({
  width: "100%",
  padding: "1.4rem 3rem",
  fontSize: "20px",
  fontFamily: "Outfit",
  outline: "none",
  border: "none",
  color: "#686868",
});

const handleFocus = () => {
  setCustomInputStyle({
    ...customInputStyle,
    outline: "1.5px solid #c4c4c4",
  });
};

const handleBlur = () => {
  setCustomInputStyle({
    ...customInputStyle,
    outline: "none",
  });
};

  return (
    <Container>
      <div className="checkout-card-content">
        <div className="checkout--card-main-content">
          <div className="checkout-details-form">
            <div className="checkout-details-form-title">
              <h4>Shipping Address</h4>
              <div className="first-name-group-input">
                <label>
                  Full Name<span className="asterisk">*</span>
                </label>
                <input type="text" {...registerFullName} />
                <p className="errors">{errors.fullName?.message}</p>
              </div>
              <div className="email-group-input">
                <label>
                  Email Address<span className="asterisk">*</span>
                </label>
                <input type="email" {...registerEmail} />
                <p className="errors">{errors.email?.message}</p>
              </div>
              <div className="county">
                <label>
                  County<span className="asterisk">*</span>
                </label>
                <select onChange={handleCountyChange} {...registerCounty}>
                  <option value="">Select County</option>
                  {counties &&
                    counties.map((county) => (
                      <option key={county.code} value={county.name}>
                        {county.name}
                      </option>
                    ))}
                </select>
                <p className="errors">{errors.county?.message}</p>
              </div>
              <div className="street-address-input">
                <label>
                  Delivery Address \ Point <span className="asterisk">*</span>{" "}
                  <i>- include your Sub-county name </i>
                </label>
                <input type="text" {...registerStreetAddress} />
                {errors.streetAddress && (
                  <p className="errors">{errors.streetAddress?.message}</p>
                )}
              </div>
              <div
                className="phone-number-input"
                style={{ width: "100%" }}
              >
                <label className="create__user_phone__label">
                  Phone Number
                </label>

                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      country={"us"}
                      value={value}
                      onChange={onChange}
                      containerStyle={{ width: "100%" }}
                      inputStyle={customInputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      buttonStyle={{
                        width: "2.6rem",
                        outline: "none",
                        border: "none",
                        backgroundColor: "#dddddd",
                        fontFamily: "Outfit",
                      }}
                    />
                  )}
                  {...registerPhoneNumber}
                />

                <p className="errors">{errors.phoneNumber?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutInformation;
