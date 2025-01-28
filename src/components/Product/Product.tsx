import { ProductName, ProductPrice, ProductWrapper } from "./styles";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice }: ProductProps) {
  return (
    <ProductWrapper>
      <ProductName>{productName}</ProductName>
      {productPrice !== undefined && (
        <ProductPrice>{productPrice} $</ProductPrice>
      )}
    </ProductWrapper>
  );
}

export default Product;
