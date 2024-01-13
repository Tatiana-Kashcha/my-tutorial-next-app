// "use client";

// import { usePathname, useSearchParams } from "next/navigation";

export default function ProductIdPage({ params }) {
  //   const searchParams = useSearchParams();
  //   const pathname = usePathname();
  //   const params = new URLSearchParams(searchParams);
  //   const id = searchParams.get("id");
  //   console.log(pathname);
  const id = params.id;

  return (
    <>
      <p>Product Id Page {id}</p>
    </>
  );
}
