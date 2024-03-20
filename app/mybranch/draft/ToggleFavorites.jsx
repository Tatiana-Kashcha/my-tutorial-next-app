'use client';

import { useEffect, useState } from 'react';

import { toggleCookies } from '@/app/lib/utils';

import { ButtonWithSvg } from '@/app/ui/components/buttons';

import { FavoriteIcon, NoFavoriteIcon, MinusIcon } from '@/public/icons';

export function ToggleFavorites({ product, cookiesName, cookiesStore }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (cookiesStore) {
      const arrayOfValues = cookiesStore.value.split('.');

      arrayOfValues.includes(product.id)
        ? setIsFavorite(true)
        : setIsFavorite(false);
    } else {
      toggleCookies(cookiesName, '');
    }

    setIsPending(false);
  }, [cookiesName, cookiesStore, product.id]);

  const handleClick = () => {
    setIsPending(true);
    toggleCookies(cookiesName, product.id);
  };

  return (
    <ButtonWithSvg
      click={handleClick}
      disabled={isPending}
      buttonStyle="cursor-pointer"
      buttonSvgComponent={
        isPending ? (
          <MinusIcon width={24} height={24} />
        ) : isFavorite ? (
          <FavoriteIcon width={24} height={24} />
        ) : (
          <NoFavoriteIcon width={24} height={24} />
        )
      }
    />
  );
}
