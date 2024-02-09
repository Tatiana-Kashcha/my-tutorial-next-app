import { ImageCard } from "./ImageCard";

export const CatalogListItems = ({ product }) => {
  const price = Number(product.price);
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  return (
    <div className="w-[288px] h-[519px]">
      <ImageCard product={product} />

      <div className="p-2 w-[288px] h-[237px] text-center">
        <p className="mb-2 text-lg">{product.make}</p>
        {product.discount ? (
          <div className="mb-1 flex items-center justify-center">
            <p className="mr-1 text-gray-400 text-right line-through">
              {price.toFixed(2).replace(".", ",")}zł
            </p>
            <p className="text-left text-2xl text-blue-800">
              {discountedPrice.toFixed(2).replace(".", ",")}zł
            </p>
          </div>
        ) : (
          <>
            <p className="mb-2 text-2xl text-blue-800">
              {price.toFixed(2).replace(".", ",")}zł
            </p>
          </>
        )}
        <p className="mb-2 text-gray-400">({`Zawiera podatek`})</p>
        <p className="mb-2">{product.quantity}Szt</p>
      </div>
    </div>
  );
};
