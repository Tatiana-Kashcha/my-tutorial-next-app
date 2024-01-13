import { fetchProductById } from "../../lib/actions";
import { CardProductById } from "../../ui/catalog/CardProductById";

export default async function ProductIdPage({ params }) {
  const id = Number(params.id);
  //   const id = params.id; //і так теж працює ??
  //   console.log(id);

  const productById = await fetchProductById(id);
  //   console.log(productById);

  //   if (typeof id === "number") {
  //     console.log('Змінна id має тип "number".');
  //   } else {
  //     console.log("Змінна id не є числовою.");
  //   }

  return (
    <>
      <h2 className="mb-4">Product Id Page {id}</h2>
      <CardProductById data={productById} />
    </>
  );
}
