import { Counter } from '@/app/ui/components/Counter';

import { SortMenuProductPage } from '@/app/ui/components/SortMenuProductPage';
import { sortMenuData } from '@/app/ui/data';
import { CatalogList } from '@/app/ui/components/catalog';
import { fetchCatalogByPopularProduct } from '@/app/lib/actions';

export const metadata = {
  title: 'Ulubione Page',
  description: 'This is Ulubione Page',
};

export default async function FavoritesPage() {
  const dataBestPopularProduct = await fetchCatalogByPopularProduct(1);
  const dataPromoPopularProduct = await fetchCatalogByPopularProduct(2);
  const dataNewPopularProduct = await fetchCatalogByPopularProduct(3);

  return (
    <>
      <div className="text-5xl font-black">Ulubione Page</div>
      <Counter />
      <section>
        <CatalogList data={dataBestPopularProduct} />
        <CatalogList data={dataPromoPopularProduct} />
        <CatalogList data={dataNewPopularProduct} />
        <div className="main-container">
          <SortMenuProductPage sortMenuData={sortMenuData} />
        </div>
      </section>
    </>
  );
}
