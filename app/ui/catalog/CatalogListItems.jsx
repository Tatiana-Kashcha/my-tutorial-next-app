import { ImageCard } from "./ImageCard";
import { PriceCard } from "./PriceCard";
import { AvailabilityProduct } from "./AvailabilityProduct";
import { HeartIconsFavorite } from "./HeartIconsFavorite";
import { ButtonCart } from "../ButtonCart";

export function CatalogListItems({ product }) {
  return (
    <div className="w-[288px] h-[519px]">
      <ImageCard product={product} />

      <div className="p-2 w-[288px] h-[237px] flex flex-col justify-between">
        <>
          <p className="text-lg text-center">{product.make}</p>
          <AvailabilityProduct product={product} />

          <div className="relative">
            <PriceCard product={product} />
            <div className="absolute -translate-y-[3.25rem] translate-x-[15.5rem]">
              <HeartIconsFavorite isFavorite={false} />
            </div>
          </div>
        </>
        <ButtonCart buttonText={"Do koszyka"} buttonHref={"/kosz"} />
      </div>
    </div>
  );
}

// export function CatalogListItems({ product }) {
//   return (
//     <div className="w-[288px] h-[519px]">
//       <ImageCard product={product} />

//       <div className="p-2 w-[288px] h-[237px] flex flex-col justify-between">
//         <>
//           <p className="text-lg text-center">{product.make}</p>
//           <AvailabilityProduct product={product} />

//           <div className="relative">
//             <PriceCard product={product} />
//             <div className="absolute right-[0px] top-[0px] translate-y-1">
//               <HeartIconsFavorite isFavorite={false} />
//             </div>
//           </div>
//         </>
//         <ButtonCart buttonText={"Do koszyka"} buttonHref={"/kosz"} />
//       </div>
//     </div>
//   );
// }
