'use client';

import { useState, useEffect } from 'react';
import { useUpdateQueryString } from '@/app/hooks';

import { ButtonWithSvg, ButtonWithText } from '@/app/ui/components/buttons';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ThreeDotsIcon,
} from '@/public/icons';

export function Pagination({ searchPage, totalPages, searchData }) {
  const { page, ...filteredSearchData } = searchData;

  const [currentPage, setCurrentPage] = useState(searchPage);
  const [currentData, setCurrentData] = useState(filteredSearchData);

  const updateQueryString = useUpdateQueryString();

  const dataChanged = currentData => {
    return JSON.stringify(currentData) !== JSON.stringify(filteredSearchData);
  };
  const searchDataChanged = dataChanged(currentData);

  useEffect(() => {
    if (searchDataChanged & (currentPage !== 1)) {
      setCurrentPage(1);
    }
  }, [searchDataChanged, currentPage]);

  useEffect(() => {
    updateQueryString({ page: currentPage });
  }, [currentPage, updateQueryString]);

  const handlePageChange = pageNumber => {
    setCurrentData(filteredSearchData);
    setCurrentPage(pageNumber);
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
      <div className="mt-6 flex items-center justify-center tab:justify-end">
        <ButtonWithSvg
          click={() => handlePageChange(currentPage - 1)}
          buttonSvgComponent={<ChevronLeftIcon fill="currentColor" />}
          buttonStyle="flex-center w-[44px] h-[44px] disabled:text-primary-600"
          disabled={currentPage === 1}
        />

        {numberPageArray.map((value, idx) => {
          return (
            <div key={idx}>
              {totalPages <= 5 && (
                <ButtonWithText
                  click={() => handlePageChange(value)}
                  buttonStyle={`flex h-[44px] w-[44px] flex-center ${currentPage === value ? 'bg-accent-100 ' : ''}`}
                  value={value}
                  buttonText={value}
                ></ButtonWithText>
              )}
              {totalPages > 5 && (
                <div>
                  {(idx === 3 &&
                    (currentPage === 1 ||
                      currentPage === 2 ||
                      currentPage === 3)) ||
                  ((idx === 1 || idx === totalPages - 2) &&
                    currentPage > 3 &&
                    currentPage < totalPages - 2) ||
                  (idx === totalPages - 4 &&
                    (currentPage === totalPages ||
                      currentPage === totalPages - 1 ||
                      currentPage === totalPages - 2)) ? (
                    <div className="flex-center flex h-[44px] w-[44px]">
                      <ThreeDotsIcon />
                    </div>
                  ) : (
                    (idx === 0 ||
                      idx === totalPages - 1 ||
                      ((idx === 1 || idx === 2) &&
                        (currentPage === 1 ||
                          currentPage === 2 ||
                          currentPage === 3)) ||
                      (currentPage > 3 &&
                        currentPage < totalPages - 2 &&
                        currentPage === value) ||
                      ((idx === totalPages - 2 || idx === totalPages - 3) &&
                        (currentPage === totalPages ||
                          currentPage === totalPages - 1 ||
                          currentPage === totalPages - 2))) && (
                      <ButtonWithText
                        click={() => handlePageChange(value)}
                        buttonStyle={`flex h-[44px] w-[44px] flex-center ${currentPage === value ? 'bg-accent-100 ' : ''}`}
                        value={value}
                        buttonText={value}
                      ></ButtonWithText>
                    )
                  )}
                </div>
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
