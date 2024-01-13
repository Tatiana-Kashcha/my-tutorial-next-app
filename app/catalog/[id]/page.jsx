import { fetchProductById } from "../../lib/actions";
import { CardProductById } from "../../ui/catalog/CardProductById";

export default async function ProductIdPage({ params }) {
  const id = Number(params.id);
  console.log(id);

  const productById = await fetchProductById(id);
  console.log(productById);

  if (typeof id === "number") {
    console.log('Змінна id має тип "number".');
  } else {
    console.log("Змінна id не є числовою.");
  }

  return (
    <>
      <p>Product Id Page {id}</p>
      <CardProductById data={productById} />
    </>
  );
}
