export const metadata = {
  title: "SecondSubCategory Page",
  description: "This is SecondSubCategory Page",
};

export default function SecondSubCategoryPage({ params }) {
  return (
    <>
      <div>SecondSubCategory of {params.secondSubCategory} Page</div>
    </>
  );
}
