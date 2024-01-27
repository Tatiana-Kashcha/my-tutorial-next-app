import Link from "next/link";
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
      <h2 className="mb-4">
        Product Id Page {id} {new Date().toTimeString()}
      </h2>
      <Link href="/catalog">
        <button className="inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-blue-600 hover:bg-blue-500">
          Back to catalog
        </button>
      </Link>
      <CardProductById data={productById} />
    </>
  );
}
