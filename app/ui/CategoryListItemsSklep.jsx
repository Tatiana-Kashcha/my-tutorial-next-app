"use client";

export const CategoryListItemsSklep = ({ data }) => {
  return (
    <div className="flex items-center justify-center w-[184px] h-[64px] border border-gray-600">
      <p className="text-center">{data.title}</p>
    </div>
  );
};
