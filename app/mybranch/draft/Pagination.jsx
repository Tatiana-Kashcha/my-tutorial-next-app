'use client';

import { useState, useEffect } from 'react';
import { useUpdateQueryString } from '@/app/hooks';

import { ButtonWithSvg, ButtonWithText } from '@/app/ui/components/buttons';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ThreeDotsIcon,
} from '@/public/icons';

export function Pagination({ searchPage = 1, totalProducts, searchData }) {
  const { page, ...filteredSearchData } = searchData;

  const [currentPage, setCurrentPage] = useState(searchPage);
  const [currentData, setCurrentData] = useState(filteredSearchData);

  const pageSize = 6; // Кількість записів на одній сторінці
  let totalPages = 1; // Кількість сторінок
  if (totalProducts > pageSize) {
    totalPages = Math.ceil(totalProducts / pageSize);
  }
  console.log(totalPages);
  console.log(totalProducts);
  console.log(currentPage);
  console.log(searchData);
  console.log(filteredSearchData);
  console.log(currentData);

  const updateQueryString = useUpdateQueryString();

  const dataChanged = currentData => {
    return JSON.stringify(currentData) !== JSON.stringify(filteredSearchData);
  };
  const searchDataChanged = dataChanged(currentData);
  console.log(searchDataChanged);

  //   useEffect(() => {
  //     // if (searchDataChanged & (currentPage !== 1)) {
  //     //   // updateQueryString({}, ['page']);
  //     //   console.log('true');
  //     // }
  //     console.log('true');
  //   }, [searchDataChanged, currentPage]);

  useEffect(() => {
    setCurrentPage(searchPage);
    console.log('true');
  }, [searchPage]);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    setCurrentData(filteredSearchData);
    updateQueryString({ page: pageNumber });
  };

  const createNumberPageArray = n => {
    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  };

  const numberPageArray = createNumberPageArray(totalPages);

  return (
    totalPages > 1 && (
      <div className="flex-center mt-6 justify-end">
        <ButtonWithSvg
          click={() => handlePageChange(currentPage - 1)}
          buttonSvgComponent={<ChevronLeftIcon fill="currentColor" />}
          buttonStyle="flex-center w-[44px] h-[44px] disabled:text-primary-600"
          disabled={currentPage === 1}
        />

        {/* {numberPageArray.map((value) => (
          <ButtonWithText
            key={value}
            click={() => handlePageChange(value)}
            buttonStyle={`flex h-[44px] w-[44px] flex-center ${currentPage === value ? 'bg-accent-100 ' : ''}`}
            value={value}
            buttonText={value}
          ></ButtonWithText>
        ))} */}

        {numberPageArray.map((value, idx) => {
          return (
            <div key={idx}>
              {idx === 3 ? (
                <ButtonWithSvg
                  click={() => updateQueryString({}, ['page'])}
                  buttonSvgComponent={<ThreeDotsIcon />}
                  buttonStyle="flex-center w-[44px] h-[44px]"
                />
              ) : (
                // <ThreeDotsIcon />
                <ButtonWithText
                  click={() => handlePageChange(value)}
                  buttonStyle={`flex h-[44px] w-[44px] flex-center ${currentPage === value ? 'bg-accent-100 ' : ''}`}
                  value={value}
                  buttonText={value}
                ></ButtonWithText>
              )}
            </div>
          );
        })}

        <ButtonWithSvg
          click={() => handlePageChange(currentPage + 1)}
          buttonSvgComponent={<ChevronRightIcon fill="currentColor" />}
          buttonStyle="flex-center w-[44px] h-[44px] disabled:text-primary-600"
          disabled={currentPage === totalPages}
        />
      </div>
    )
  );
}
