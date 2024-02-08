export function MarkerCard({ product }) {
  return (
    <>
      {product.popular_title && (
        <div className="absolute left-[-110px] top-[15px] -rotate-45 w-full bg-purple-800">
          {product.popular_title === "Nowośćі" && (
            <p className="text-center text-white">New</p>
          )}
          {product.popular_title === "Bestsellery" && (
            <p className="text-center text-white">Best</p>
          )}
        </div>
      )}

      {product.discount && (
        <div className="absolute left-[-110px] top-[15px] -rotate-45 w-full bg-blue-800">
          <p className="text-center text-white">-{product.discount}%</p>
        </div>
      )}
    </>
  );
}
