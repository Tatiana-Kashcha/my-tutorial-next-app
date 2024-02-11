export function AvailabilityProduct({ product }) {
  return (
    <div className="mb-3 flex items-center justify-center">
      {product.quantity ? (
        <>
          <span className="mr-2 w-[12px] h-[12px] rounded-full bg-green-600"></span>
          <p>Jest dostępny</p>
        </>
      ) : (
        <>
          <span className="mr-2 w-[12px] h-[12px] rounded-full bg-red-600"></span>
          <p>Nie dostępny</p>
        </>
      )}
    </div>
  );
}

// export function AvailabilityProduct({ product }) {
//   return (
//     <>
//       {product.quantity ? (
//         <div className="mb-3 flex items-center justify-center">
//           <span className="mr-2 w-[12px] h-[12px] rounded-full bg-green-600"></span>
//           <p>Jest dostępny</p>
//         </div>
//       ) : (
//         <div className="mb-3 flex items-center justify-center">
//           <span className="mr-2 w-[12px] h-[12px] rounded-full bg-red-600"></span>
//           <p>Nie dostępny</p>
//         </div>
//       )}
//     </>
//   );
// }
