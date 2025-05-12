import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { FiEyeOff } from "react-icons/fi";
import Container from "./PasswordInputCSS";

export const PasswordInput = ( {register,passwordLabel,password,placeholder} ) => {
  const [hide, setHide] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const toggle = () => {
    setHide((prev) => !prev);
  };

  return (
    <Container isFocused={isFocused}>
      <div className={`wrap--input ${isFocused ? "focused" : ""}`}>
        <input
          type={hide ? "password" : "text"}
          className="input"
          onFocus={() => setIsFocused(true)}
          // placeholder={placeholder}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          {...register} 
        />
        <label className={`label--input ${isFocused ? "focused" : ""}`}>
          {passwordLabel}
        </label>
        <i className="icon" onClick={toggle}>
          {hide ? <FiEyeOff /> : <LuEye />}
        </i>
      </div>
    </Container>
  );
};

export default PasswordInput;