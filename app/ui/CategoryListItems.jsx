"use client";
import Image from "next/image";

export function CategoryListItems({ data }) {
  return (
    <>
      {data.img_url ? (
        <div className="mb-3.5 flex items-center justify-center overflow-hidden box-border w-[184px] h-[184px] rounded-full">
          <Image
            src={data.img_url}
            alt={data.title}
            className="block object-cover h-full object-center"
            width={184}
            height={184}
          />
        </div>
      ) : (
        <div className="mb-3.5 flex items-center justify-center overflow-hidden box-border w-[184px] h-[184px] rounded-full">
          <Image
            src={"/images/noImageIcon.jpg"}
            alt={data.title}
            className="block object-cover h-full object-center"
            width={184}
            height={184}
          />
        </div>
      )}
    </>
  );
}

// export const CategoryListItems = ({ data }) => {
//   return (
//     <div className="mb-14">
//       {data.img_url ? (
//         <div className="mb-3.5 flex items-center justify-center overflow-hidden box-border w-[184px] h-[184px] rounded-full">
//           <Image
//             src={data.img_url}
//             alt={data.title}
//             className="block object-cover h-full object-center"
//             width={184}
//             height={184}
//           />
//         </div>
//       ) : (
//         <div className="mb-3.5 flex items-center justify-center overflow-hidden box-border w-[184px] h-[184px] rounded-full">
//           <Image
//             src={"/images/noImageIcon.jpg"}
//             alt={data.title}
//             className="block object-cover h-full object-center"
//             width={184}
//             height={184}
//           />
//         </div>
//       )}
//       <p className="text-center">{data.title}</p>
//     </div>
//   );
// };
