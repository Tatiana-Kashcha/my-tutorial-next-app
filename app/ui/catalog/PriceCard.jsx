export function PriceCard({ product }) {
  const price = Number(product.price);
  const discountAmount = (price * product.discount) / 100;
  const discountedPrice = price - discountAmount;

  return (
    <>
      <div className="flex justify-center items-center">
        {product.discount ? (
          <div className="flex items-center">
            <p className="mr-1 text-gray-400 text-right line-through">
              {price.toFixed(2).replace(".", ",")}zł
            </p>
            <p className="text-left text-2xl text-blue-800">
              {discountedPrice.toFixed(2).replace(".", ",")}zł
            </p>
          </div>
        ) : (
          <p className="text-2xl text-blue-800">
            {price.toFixed(2).replace(".", ",")}zł
          </p>
        )}
      </div>
      <p className="text-gray-400">({`Zawiera podatek`})</p>
    </>
  );
}

// export function PriceCard({ product }) {
//   const price = Number(product.price);
//   const discountAmount = (price * product.discount) / 100;
//   const discountedPrice = price - discountAmount;

//   return (
//     <>
//       {product.discount ? (
//         <div className="flex items-center">
//           <p className="mr-1 text-gray-400 text-right line-through">
//             {price.toFixed(2).replace(".", ",")}zł
//           </p>
//           <p className="text-left text-2xl text-blue-800">
//             {discountedPrice.toFixed(2).replace(".", ",")}zł
//           </p>
//         </div>
//       ) : (
//         <div className="flex items-center">
//           <p className="text-2xl text-blue-800">
//             {price.toFixed(2).replace(".", ",")}zł
//           </p>
//         </div>
//       )}
//     </>
//   );
// }
