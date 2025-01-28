import "./styles.css";
import { InpitProps } from "./types";

function Input({ name, type="text", placeholder, label, id }: InpitProps) {
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
