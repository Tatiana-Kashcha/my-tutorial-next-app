"use client";

import { useState, useEffect } from "react";
import { useUpdateQueryString } from "@/app/hooks";
import { ButtonWithText } from "./buttons";

import { SwitchTriangle } from "./common";

export function SortMenuProduct({ sortMenuData, searchSort = "id" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(searchSort);
  const updateQueryString = useUpdateQueryString();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClick = () => {
    toggleDropdown();
    updateQueryString({ sort: selectedProduct });
  };

  const onOptionClick = (value) => {
    setSelectedProduct(value);
  };

  useEffect(() => {
    updateQueryString({ sort: selectedProduct });
  }, [selectedProduct, updateQueryString]);

  return (
    <>
      <form className="relative flex items-center justify-end py-3 text-end mob:hidden lap:block">
        <label className="flex-center flex pr-4 text-primary-900 after:absolute">
          <p className="flex-center mr-4 flex">Sortowanie:</p>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            onClick={onClick}
            className="text-accent peer flex cursor-pointer select-none appearance-none bg-transparent pr-5 text-base transition-all after:absolute after:right-0 after:top-0 after:h-full after:w-full after:ease-in-out checked:bg-accent-200 focus:text-primary-900 focus:outline-none lap:min-w-[170px]"
          >
            {sortMenuData.map(({ id, text, value }) => (
              <option
                className="my-2 flex h-[44px] w-[194px] appearance-none px-4 bg-blend-lighten checked:bg-accent-200 hover:bg-blend-darken "
                key={id}
                value={value}
              >
                {text}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-5 h-6 w-6">
            <SwitchTriangle isOpen={isOpen} />
          </div>
        </label>
        <hr />
      </form>
      <form className="deck:hidden flex flex-col bg-primary-100 mob:block mob:h-dvh lap:hidden">
        <label className="text-primary-900">
          <div className="flex w-full cursor-pointer flex-col text-start text-body1 transition-all ">
            {sortMenuData.map(({ id, text, value }) => (
              <ButtonWithText
                click={() => onOptionClick(value)}
                buttonStyle={`flex h-[44px] w-full flex-col justify-center border-b border-primary px-5 py-4 text-body1 ${selectedProduct === value ? "bg-accent-200 " : ""}`}
                key={id}
                buttonText={text}
                value={value}
              ></ButtonWithText>
            ))}
          </div>
        </label>
        <hr />
      </form>
    </>
  );
}
