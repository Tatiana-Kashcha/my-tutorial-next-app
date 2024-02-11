export function MarkerCard({ product, stylizationText, stylizationDiv }) {
  return (
    <>
      {product.popular_title && (
        <div className={`${stylizationDiv} bg-purple-800`}>
          <p className={stylizationText}>
            {(() => {
              switch (product.popular_title) {
                case "Nowośćі":
                  return "New";
                case "Bestsellery":
                  return "Best";
                default:
                  return "";
              }
            })()}
          </p>
        </div>
      )}

      {product.discount && (
        <div className={`${stylizationDiv} bg-blue-800`}>
          <p className={stylizationText}>-{product.discount}%</p>
        </div>
      )}
    </>
  );
}

// export function MarkerCard({ product }) {
//   return (
//     <>
//       {product.popular_title && (
//         <div className="absolute left-[-110px] top-[15px] -rotate-45 w-full bg-purple-800">
//           <p className="text-center text-white">
//             {(() => {
//               switch (product.popular_title) {
//                 case "Nowośćі":
//                   return "New";
//                 case "Bestsellery":
//                   return "Best";
//                 default:
//                   return "";
//               }
//             })()}
//           </p>
//         </div>
//       )}

//       {product.discount && (
//         <div className="absolute left-[-110px] top-[15px] -rotate-45 w-full bg-blue-800">
//           <p className="text-center text-white">-{product.discount}%</p>
//         </div>
//       )}
//     </>
//   );
// }

// export function MarkerCard({ product }) {
//   return (
//     <>
//       {product.popular_title && (
//         <div className="absolute left-[-110px] top-[15px] -rotate-45 w-full bg-purple-800">
//           {product.popular_title === "Nowośćі" && (
//             <p className="text-center text-white">New</p>
//           )}
//           {product.popular_title === "Bestsellery" && (
//             <p className="text-center text-white">Best</p>
//           )}
//         </div>
//       )}

//       {product.discount && (
//         <div className="absolute left-[-110px] top-[15px] -rotate-45 w-full bg-blue-800">
//           <p className="text-center text-white">-{product.discount}%</p>
//         </div>
//       )}
//     </>
//   );
// }
