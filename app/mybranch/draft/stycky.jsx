"use client";

import { useState } from "react";
import { sortMenuData } from "@/app/ui/data";
import { FilterRangePrice } from "@/app/ui/components/filter/filterFormRange";
import { SortMenuProduct } from "@/app/ui/components/SortMenuProduct";
import { Modal } from "@/app/ui/components/Modal";
import { ButtonWithTextAndSvg } from "@/app/ui/components/buttons";
import { ButtonWithText } from "@/app/ui/components/buttons";

import { montserratMedium500 } from "@/public/fonts";

import { SortIcon } from "@/public/icons";
import { FilterIcon } from "@/public/icons";

const prfStyle = "flex py-[10px] flex-center gap-4 text-body1";
const btnStyle =
  "group flex h-[44px] mob:w-[163px] tab:w-[331px] gap-3 px-2 text-center text-body2 hover:underline";
const btnStyleSticky =
  "flex h-[44px] mob:w-[164px] gap-3 px-2 text-center text-body2 hover:underline";

export function StickySortFilter({
  searchParams,
  minPriceDb,
  maxPriceDb,
  min_price,
  max_price,
}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const { sort } = searchParams;

  const handleButtonClick = (text) => {
    setModalTitle(text);
    setIsShowModal(true);
  };
  const handleRemoveAllFilters = () => {};

  return (
    <>
      <div className="flex-center sticky top-0 flex text-body1 font-medium mob:gap-4 mob:p-4 lap:gap-6 lap:p-0">
        <ButtonWithTextAndSvg
          click={() => handleButtonClick("Sortowanie")}
          buttonStyle={`${btnStyle} border border-primary-500 text-primary-1000 hover:text-accent-500 `}
          buttonSvgComponent={<SortIcon />}
          buttonParagrafStyle={`${montserratMedium500.className} ${prfStyle} text-primary-1000`}
          buttonParagrafText="Sortowanie"
        />
        <ButtonWithTextAndSvg
          click={() => handleButtonClick("Filtry")}
          buttonStyle={`${btnStyle} bg-accent-500 text-accent-500 hover:text-accent-100 `}
          buttonSvgComponent={<FilterIcon />}
          buttonParagrafStyle={`${montserratMedium500.className} ${prfStyle} bg-accent-500 text-primary-100`}
          buttonParagrafText="Filtry"
        />
      </div>

      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)} title={modalTitle}>
          {(modalTitle === "Sortowanie" && (
            <SortMenuProduct sortMenuData={sortMenuData} searchSort={sort} />
          )) ||
            (modalTitle === "Filtry" && (
              <>
                <div className="h-dvh ">
                  <FilterRangePrice
                    initialMin={minPriceDb}
                    initialMax={maxPriceDb}
                    searchMin={min_price}
                    searchMax={max_price}
                    min={minPriceDb}
                    max={maxPriceDb}
                  />
                </div>

                <div className="flex-between sticky bottom-0 flex bg-primary-400 text-body1 font-medium mob:p-4 tab:px-10 tab:py-4 lap:p-0">
                  <ButtonWithText
                    click={handleRemoveAllFilters}
                    buttonStyle={`${montserratMedium500.className} ${prfStyle}  ${btnStyleSticky} border border-accent-500 text-primary-1000 hover:text-accent-500 `}
                    buttonText="Zresetuj"
                  />

                  <ButtonWithText
                    click={() => setIsShowModal(false)}
                    title={modalTitle}
                    buttonStyle={` ${montserratMedium500.className} ${prfStyle} ${btnStyleSticky} bg-accent-500 text-primary-100  text-accent-500 hover:text-accent-100 `}
                    buttonText="Zastosować"
                  />
                </div>
              </>
            ))}
        </Modal>
      )}
    </>
  );
}
