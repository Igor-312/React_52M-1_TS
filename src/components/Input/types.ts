export interface InpitProps {
  name: string;
  type?: "text" | "email" | "password" | "tel" | "url" | "number";
  placeholder?: string;
  label?: string;
  id?: string;
}
