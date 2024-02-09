import { ImageCard } from "./ImageCard";

export const CatalogListItems = ({ product }) => {
  const price = Number(product.price);
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  return (
    <div className="w-[288px] h-[519px]">
      <ImageCard product={product} />

      <div className="p-2 w-[288px] h-[237px] text-center">
        <p className="mb-2">{product.make}</p>
        <p className="mb-2">Price: {price.toFixed(2).replace(".", ",")}zł</p>
        <p className="mb-2">
          DiscountedPrice: {discountedPrice.toFixed(2).replace(".", ",")}zł
        </p>
        <p className="mb-2">{product.quantity}Szt</p>
        <p className="mb-2">({`Zawiera podatek`})</p>
      </div>
    </div>
  );
};
