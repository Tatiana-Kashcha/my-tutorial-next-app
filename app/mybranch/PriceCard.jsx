export function PriceCard({ product }) {
  return (
    <>
      <div className="flex items-center justify-center">
        {product.discount ? (
          <div className="flex items-center">
            <p className="mr-1 text-right text-gray-400 line-through">
              {product.price.replace('.', ',')}zł
            </p>
            <p className="text-left text-2xl text-blue-800">
              {product.discounted_price.replace('.', ',')}zł
            </p>
          </div>
        ) : (
          <p className="text-2xl text-blue-800">
            {product.price.replace('.', ',')}zł
          </p>
        )}
      </div>
      <p className="text-center text-gray-400">({`Zawiera podatek`})</p>
    </>
  );
}
