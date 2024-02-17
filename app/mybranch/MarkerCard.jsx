export function MarkerCard({ product, stylizationDiv }) {
  return (
    product.popular_title &&
    (() => {
      switch (product.popular_title) {
        case 'Nowośći':
          return <p className={`${stylizationDiv} bg-[#9F8A86]`}>New</p>;
        case 'Bestsellery':
          return <p className={`${stylizationDiv} bg-[#9F8A86]`}>Best</p>;
        case 'Promocje':
          return (
            <p className={`${stylizationDiv} bg-[#3F418D]`}>
              -{product.discount}%
            </p>
          );
        default:
          return '';
      }
    })()
  );
}
