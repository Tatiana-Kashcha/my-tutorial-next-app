import Image from 'next/image';
import { MarkerCard } from '@/app/ui/components/catalog';

export function ImageCard({ product }) {
  const stylizationMarkerCardDiv =
    'absolute -rotate-45 w-full -translate-y-[6.5rem] -translate-x-[7.5rem] text-center text-white';

  return (
    <div className="relative flex h-[259px] w-[288px] cursor-pointer items-center justify-center overflow-hidden">
      <MarkerCard product={product} stylizationDiv={stylizationMarkerCardDiv} />
      <Image
        src={product.img_url ? product.img_url[0] : '/images/defaultImg.jpg'}
        alt="Product"
        className="object-content block h-full object-center"
        width={288}
        height={259}
        priority={true}
      />
    </div>
  );
}
