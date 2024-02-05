

export const metadata = {
  title: 'Category Page',
  description: 'This is Category Page',
};

export default function CategoryPage({ params }) {
  return (
    <>
      <div>Category of {params.category} Page</div>
      
    </>
  );
}
