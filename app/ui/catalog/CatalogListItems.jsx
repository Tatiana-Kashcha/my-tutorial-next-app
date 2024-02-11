import { ImageCard } from "./ImageCard";
import { PriceCard } from "./PriceCard";
import { AvailabilityProduct } from "./AvailabilityProduct";
import { HeartIconsFavorite } from "./HeartIconsFavorite";
import { ButtonCart } from "../ButtonCart";
import { Butt } from "../Butt";

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
            <div className="absolute right-[0px] top-[0px]">
              <HeartIconsFavorite isFavorite={false} />
            </div>
          </div>
        </>
        {/* <ButtonCart buttonText={"Do koszyka"} buttonHref={"/kosz"} /> */}
        <Butt buttonText={"Do koszyka"} buttonHref={"/kosz"} />
      </div>
    </div>
  );
}

// export function CatalogListItems({ product }) {
//   return (
//     <div className="w-[288px] h-[519px]">
//       <ImageCard product={product} />

//       <div className="p-2 w-[288px] h-[237px] text-center">
//         <p className="mb-2 text-lg">{product.make}</p>
//         <AvailabilityProduct product={product} />

//         <div className="mb-2 relative">
//           <PriceCard product={product} />
//           <div className="absolute right-[0px] top-[0px]">
//             <HeartIconsFavorite isFavorite={false} />
//           </div>
//         </div>
//         <ButtonCart buttonText={"Do koszyka"} buttonHref={"/kosz"} />
//       </div>
//     </div>
//   );
// }

// export const CatalogListItems = ({ product }) => {
//   return (
//     <div className="w-[288px] h-[519px]">
//       <ImageCard product={product} />

//       <div className="p-2 w-[288px] h-[237px] text-center">
//         <p className="mb-2 text-lg">{product.make}</p>
//         <AvailabilityProduct product={product} />
//         <div className="mb-1 relative flex justify-center">
//           <PriceCard product={product} />
//           <div className="absolute flex justify-center items-center right-[0px] top-[0px]">
//             <div className="box-border w-[32px] h-[32px] border border-blue-800"></div>
//           </div>
//         </div>
//         <p className="mb-2 text-gray-400">({`Zawiera podatek`})</p>

//         <p className="mb-2">{product.quantity}Szt</p>
//       </div>
//     </div>
//   );
// };
