import { ImageCard } from "./ImageCard";
import { PriceCard } from "./PriceCard";

export const CatalogListItems = ({ product }) => {
  return (
    <div className="w-[288px] h-[519px]">
      <ImageCard product={product} />

      <div className="p-2 w-[288px] h-[237px] text-center">
        <p className="mb-2 text-lg">{product.make}</p>
        <div className="mb-1 relative flex justify-center">
          <PriceCard product={product} />
          <div className="absolute flex justify-center items-center right-[0px] top-[0px]">
            <div className="box-border w-[32px] h-[32px] border border-blue-800"></div>
          </div>
        </div>
        <p className="mb-2 text-gray-400">({`Zawiera podatek`})</p>

        <p className="mb-2">{product.quantity}Szt</p>
      </div>
    </div>
  );
};
