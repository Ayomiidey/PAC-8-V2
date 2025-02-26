import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import ProductPrice from "./product-price";
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group relative flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <button
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 z-10 rounded-full bg-white p-1.5 opacity-70 transition-opacity hover:opacity-100 dark:bg-gray-800"
      >
        <Heart size={18} className="text-gray-600 dark:text-gray-300" />
      </button>

      <Link
        href={`/products/${product.slug}`}
        className="relative overflow-hidden pt-[100%]"
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          priority={true}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/products/${product.slug}`} className="mb-1 mt-2">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
            {product.name}
          </h3>
        </Link>

        <div className="mb-1 flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-400">
              <Star size={16} fill="currentColor" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.numReviews} reviews)
            </span>
          </div>

          {product.stock > 0 ? (
            <div className="flex items-center gap-2">
              <ProductPrice value={Number(product.price)} />
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through dark:text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
