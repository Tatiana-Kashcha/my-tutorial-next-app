import Image from "next/image";

export const metadata = {
  title: "Catalog",
  description: "My Catalog Page",
};

export default function CatalogPage() {
  return (
    <>
      <p>Catalog Page</p>
      <Image
        src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697901936/chevrolet_camaro_wl5arc.jpg"
        alt="Car"
        width={100}
        height={40}
      />
    </>
  );
}
