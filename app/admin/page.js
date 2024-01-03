// "use client";

// import { CldImage } from "next-cloudinary";
import Image from "next/image";

export const metadata = {
  title: "Admin",
  description: "My Admin Page",
};

export default function AdminPage() {
  return (
    <>
      <p>Admin Page</p>

      <Image
        src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
        alt="Car"
        width={100}
        height={40}
      />
    </>
  );
}
