import { Suspense } from "react";
import { ShowActiveFilters } from "@/app/ui/components/filter/showActiveFilters";
import {
  fetchCategory,
  fetchCatalogByPrice,
  fetchMinAndMaxPrice,
  fetchDataFilterPopular,
  fetchDataFilterColors,
  fetchDataFilterTypeProduct,
  fetchDataFilterCapacity,
  fetchDataFilterBrand,
  fetchDataFilterCollection,
  fetchDataFilterCountry,
  fetchDataFilterPacking,
  fetchDataFilterAvailabilityProduct,
} from "@/app/lib/actions";

import { CategoryList, ProductList } from "@/app/ui/components/catalog";
import { FilterRangePrice } from "@/app/ui/components/filter/filterFormRange";
import { DropdownFilterProduct } from "@/app/ui/components/dropdownFilterProduct";
import { SortMenuProduct } from "@/app/ui/components/SortMenuProduct";
import { sortMenuData } from "@/app/ui/data";
import { StickySortFilter } from "@/app/ui/components/StickySortFilter";

export const metadata = {
  title: "Sklep Page",
  description: "This is Sklep Page",
};

const categoryListStyle = "flex overflow-x-auto list-none gap-6";
const categoryListItemsStyle = "h-[146px] w-[146px]";

export default async function SklepPage({ searchParams }) {
  const { min_price, max_price, sort } = searchParams;

  const dataCategory = await fetchCategory();

  // дані для ініціалізації фільтрів продуктів
  const dataFilterPopular = await fetchDataFilterPopular();
  const dataFilterColors = await fetchDataFilterColors();
  const dataFilterTypeProduct = await fetchDataFilterTypeProduct();
  const dataFilterCapacity = await fetchDataFilterCapacity();
  const dataFilterBrand = await fetchDataFilterBrand();
  const dataFilterCollection = await fetchDataFilterCollection();
  const dataFilterCountry = await fetchDataFilterCountry();
  const dataFilterPacking = await fetchDataFilterPacking();

  // дані для ініціалізації фільтру по наявності продуктів
  const dataAvailabilityProduct = await fetchDataFilterAvailabilityProduct();
  const isAvailability = dataAvailabilityProduct[0].availability;
  const noAvailability = dataAvailabilityProduct[0].no_availability;
  const dataFilterAvailability = [
    { id: 1, name: "Jest dostępny", total_products: isAvailability },
    { id: 2, name: "Nie dostępny", total_products: noAvailability },
  ];

  // дані для ініціалізації фільтру цін продуктів
  const minAndMaxPrice = await fetchMinAndMaxPrice();
  const minPriceDb = Number(minAndMaxPrice[0].min_price_db);
  const maxPriceDb = Number(minAndMaxPrice[0].max_price_db);

  const dataCatalogByPrice = await fetchCatalogByPrice(
    minPriceDb,
    maxPriceDb,
    min_price,
    max_price,
    sort
  );
  const totalProducts = dataCatalogByPrice.length;

  return (
    <>
      <section className="pt-10">
        <div className="main-container">
          <CategoryList
            data={dataCategory}
            style={categoryListStyle}
            styleItems={categoryListItemsStyle}
          />
        </div>
      </section>

      <section className="pt-10">
        <div className="main-container flex">
          <div className="mr-6 hidden border-t border-primary-800 lap:block">
            <Suspense>
              <DropdownFilterProduct
                title={"Popularne produkty"}
                data={dataFilterPopular}
              />
              <DropdownFilterProduct
                title={"Rodzaj"}
                data={dataFilterTypeProduct}
              />
              <DropdownFilterProduct title={"Odcień"} data={dataFilterColors} />
              <DropdownFilterProduct
                title={"Pojemność"}
                data={dataFilterCapacity}
              />
              <DropdownFilterProduct
                title={"Producent"}
                data={dataFilterBrand}
              />
              <DropdownFilterProduct
                title={"Kolekcja"}
                data={dataFilterCollection}
              />
              <DropdownFilterProduct title={"Kraj"} data={dataFilterCountry} />
              <DropdownFilterProduct
                title={"Opakowanie"}
                data={dataFilterPacking}
              />
              <DropdownFilterProduct
                title={"Dostępność"}
                data={dataFilterAvailability}
              />
              <FilterRangePrice
                initialMin={minPriceDb}
                initialMax={maxPriceDb}
                searchMin={min_price}
                searchMax={max_price}
                min={minPriceDb}
                max={maxPriceDb}
              />
            </Suspense>
          </div>
          <div>
            <>
              <div className="hidden lap:block">
                <ShowActiveFilters />
              </div>

              <div className="hidden justify-between border-b border-t border-[#9F8A86] py-3 lap:flex">
                <p className="py-3">
                  Pokazuje 1 - 24 z {totalProducts} elementów
                </p>
                <SortMenuProduct
                  sortMenuData={sortMenuData}
                  searchSort={sort}
                />
              </div>
              <div className="mob:flex lap:hidden">
                <StickySortFilter
                  searchParams={searchParams}
                  minPriceDb={minPriceDb}
                  maxPriceDb={maxPriceDb}
                  min_price={min_price}
                  max_price={max_price}
                />
              </div>
            </>

            <ProductList data={dataCatalogByPrice} />
          </div>
        </div>
      </section>
    </>
  );
}
