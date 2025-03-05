import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 overflow-hidden">
      <button
        aria-label="Add to wishlist"
        className="absolute right-2 top-2 z-10 rounded-full bg-white p-1 sm:right-3 sm:top-3 sm:p-1.5 opacity-70 transition-opacity hover:opacity-100 dark:bg-gray-800"
      >
        <Heart size={16} className="text-gray-600 dark:text-gray-300" />
      </button>

      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-square w-full overflow-hidden"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={true}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="text-xs text-gray-500">{product.brand}</div>
        <Link href={`/product/${product.slug}`} className="mb-1 mt-1 sm:mt-2">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-400">
              <Star size={14} fill="currentColor" />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({`${product.numReviews} reviews`})
            </span>
          </div>

          {product.stock > 0 ? (
            <div className="text-sm font-semibold">
              <ProductPrice value={Number(product.price)} />
            </div>
          ) : (
            <p className="text-red-600 text-xs">Out Of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
