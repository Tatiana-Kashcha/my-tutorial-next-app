import Image from "next/image";
import Link from "next/link";

export function ButtonCart({ buttonText, buttonHref }) {
  return (
    <Link
      href={buttonHref}
      className="flex max-w-[272px] justify-center bg-[#3F418D] py-2 text-white hover:bg-white hover:border hover:border-[#3F418D] hover:text-[#3F418D]"
    >
      <div className="flex items-center">
        <Image
          src={"/icons/iconsCart copy.svg"}
          height={40}
          width={40}
          alt="Cart"
          className="mr-[12px] h-10 w-10 hover:fill-[#3F418D] hover:stroke-[#3F418D]"
        />
        <p className="text-left text-[19px]">{buttonText}</p>
      </div>
    </Link>
  );
}
