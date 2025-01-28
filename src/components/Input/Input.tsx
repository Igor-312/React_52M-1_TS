import { InputContainer, InputElement, Label } from "./styles";
import { InputProps } from "./types";

function Input({ name, type="text", placeholder, label, id }: InputProps) {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputElement
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;
