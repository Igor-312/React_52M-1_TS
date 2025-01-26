export interface ProductProps {
  id: number;
  name: string;
  price: number;
  description?: string;
  onAddToCart: (id: number) => void;
}
