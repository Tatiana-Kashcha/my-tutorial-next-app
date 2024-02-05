export const metadata = {
  title: "Category Page",
  description: "This is Category Page",
};

export default function CategoryPage({ params }) {
  const titleCategory = params.category.replaceAll("-", " ");

  return (
    <>
      <div>Category of {titleCategory.replaceAll("-", " ")} Page</div>
    </>
  );
}
