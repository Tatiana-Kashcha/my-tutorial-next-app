"use client";
import { useState } from "react";

// const getFavorites = () => {
//   if (typeof window !== "undefined") {
//     const storedFavorites = window.localStorage.getItem("favorites");
//     return storedFavorites ? JSON.parse(storedFavorites) : [];
//   }
//   return [];
// };

// const addFavorite = (productId) => {
//   const favorites = getFavorites();
//   favorites.push(productId);
//   window.localStorage.setItem("favorites", JSON.stringify(favorites));
// };

// const removeFavorite = (productId) => {
//   const favorites = getFavorites();
//   const newFavorites = favorites.filter((id) => id !== productId);
//   window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
// };

const getFavorites = () => {
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const addFavorite = (productId) => {
  const favorites = getFavorites();
  favorites.push(productId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFavorite = (productId) => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter((id) => id !== productId);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());

  const isFavorite = (productId) => favorites.includes(productId);

  const toggleFavorite = (productId) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
      setFavorites((prev) => prev.filter((id) => id !== productId));
    } else {
      addFavorite(productId);
      setFavorites((prev) => [...prev, productId]);
    }
  };

  return [favorites, isFavorite, toggleFavorite];
};
