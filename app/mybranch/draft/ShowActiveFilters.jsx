'use client';
import { useState } from 'react';
import { montserratMedium500 } from '@/public/fonts';
import { ButtonWithTextAndSvg } from '@/app/ui/components/buttons/';
import { CloseIcon } from '@/public/icons';

const dataFilters = [
  { title: 'Białe' },
  { title: 'Kolorowe1' },
  { title: 'Kolorowe2' },
  { title: 'Kolorowe3' },
  { title: 'Kolorowe4' },
  { title: 'Kolorowe5' },
  { title: 'Kolorowe6' },
  { title: 'Kolorowe7' },
];

const FilterBadge = ({ label, onClose }) => (
  <ButtonWithTextAndSvg
    onClick={onClose}
    buttonParagrafText={label}
    buttonStyle="flex-center flex-row-reverse gap-2 px-2 py-3 text-body2 hover:line-through"
    buttonSvgComponent={<CloseIcon width={24} height={24} fill="#644F4A" />}
  />
);

export function ShowActiveFilters() {
  const [activeFilters, setActiveFilters] = useState(() =>
    dataFilters.map(filter => filter.title)
  );

  // console.log(activeFilters);

  const handleClose = index => {
    setActiveFilters(prevState => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const shouldShowRemoveAllFilters = activeFilters.length > 0;

  const handleRemoveAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    shouldShowRemoveAllFilters && (
      <div className="mb-6 flex flex-col flex-wrap content-start whitespace-nowrap border-b border-t border-primary-500 px-2 py-2 text-sm text-primary-1000">
        <div className="flex flex-wrap gap-2">
          <p
            className={`${montserratMedium500.className} text-bod1 my-auto font-medium`}
          >
            Aktywne filtry:
          </p>
          <ButtonWithTextAndSvg
            onClick={handleRemoveAllFilters}
            buttonStyle="group flex gap-2 bg-accent-100 px-2 py-3 text-center text-body2 hover:text-accent-500 hover:underline"
            buttonParagrafStyle="text-primary-900 group-hover:text-accent-500"
            buttonParagrafText="Usuń wszystkie filtry"
            buttonSvgComponent={
              <CloseIcon width={24} height={24} fill="currentColor" />
            }
          />
          {dataFilters.map(
            (filter, index) =>
              activeFilters.includes(filter.title) && (
                <FilterBadge
                  key={index}
                  label={filter.title}
                  onClose={() => handleClose(index)}
                />
              )
          )}
        </div>
      </div>
    )
  );
}
