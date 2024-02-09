import { ImageCard } from "./ImageCard";
import { PriceCard } from "./PriceCard";

export const CatalogListItems = ({ product }) => {
  return (
    <div className="w-[288px] h-[519px]">
      <ImageCard product={product} />

      <div className="p-2 w-[288px] h-[237px] text-center">
        <p className="mb-2 text-lg">{product.make}</p>
        <PriceCard product={product} />

        <p className="mb-2 text-gray-400">({`Zawiera podatek`})</p>
        <p className="mb-2">{product.quantity}Szt</p>
      </div>
    </div>
  );
};
