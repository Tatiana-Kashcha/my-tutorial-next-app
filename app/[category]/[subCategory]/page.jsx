export const metadata = {
  title: "SubCategory Page",
  description: "This is SubCategory Page",
};

export default function SubCategoryPage({ params }) {
  return (
    <>
      <div>SubCategory of {params.subCategory} Page</div>
    </>
  );
}
