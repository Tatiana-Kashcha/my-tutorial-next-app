// import { CatalogListItemsAll } from "./CatalogListItemsAll";
import { CatalogListItems } from "./CatalogListItems";

export function CatalogList({ data }) {
  // console.log(data);
  return (
    <>
      <ul className="mb-4 flex flex-wrap list-none gap-6">
        {data.map((product) => (
          <li
            key={product.id}
            className="rounded-lg bg-center bg-cover bg-no-repeat object-cover"
          >
            {/* <CatalogListItemsAll product={product} /> */}
            <CatalogListItems product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
