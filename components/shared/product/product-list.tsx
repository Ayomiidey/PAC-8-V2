import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-6 sm:my-10">
      <h2 className="text-xl font-bold mb-3 sm:text-2xl sm:mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {limitedData.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="p-4 text-center bg-gray-50 rounded-lg dark:bg-gray-800">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
