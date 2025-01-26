import "./styles.css";
import { IndentProps } from "./types";

function Input({ name, type, placeholder, label, id }) {
  return (
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </div>
  );
}

export default Input;
