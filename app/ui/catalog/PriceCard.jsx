export function PriceCard({ product }) {
  const price = Number(product.price);
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  return (
    <>
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
    </>
  );
}
