// "use client";

import Link from "next/link";
import Image from "next/image";
// import { CldImage } from "next-cloudinary";
import NavLinks from "@/app/ui/navlinks";

//test
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <Image
          src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
          alt="Car"
          width={100}
          height={40}
          priority
        />
        {/* <div className="h-20 w-20"> */}
        {/* <CldImage
          src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
          alt="Car"
          sizes="100vw"
          crop="fill"
          fill={true}
        /> */}
        {/* </div> */}
      </Link>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
