"use client";

import { Cart } from "@/types";
import { useTransition } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
} from "@/lib/actions/cart.action";
import { Loader, Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import OrderSummary from "./orderSummary";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {!cart || cart.items.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg mb-4">Your Cart is Empty.</p>
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Shopping!
          </Link>
        </div>
      ) : (
        <div className="container mx-auto mb-5 px-4 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-auto md:h-[calc(100vh-14rem)]">
                <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                  <div className="p-3 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                      Your Shopping Cart (
                      {cart.items.reduce((a, c) => a + c.qty, 0)} items)
                    </h2>
                  </div>
                </div>

                <div className="overflow-y-auto max-h-[60vh] md:h-[calc(100%-5rem)]">
                  <div className="p-3 md:p-6">
                    <div className="space-y-3 md:space-y-4">
                      {cart.items.map((cartItem) => (
                        <div
                          key={cartItem.slug}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 md:p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100"
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex-shrink-0">
                            <Link href={`/product/${cartItem.slug}`}>
                              <Image
                                src={cartItem.image}
                                alt={cartItem.name}
                                width={100}
                                height={100}
                                className="object-cover object-center w-full h-full"
                              />
                            </Link>
                          </div>

                          <div className="flex-grow">
                            <h3 className="font-medium text-sm sm:text-lg line-clamp-2">
                              {cartItem.name}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm">
                              Unit Price: ${cartItem.price}
                            </p>
                          </div>

                          <div className="flex sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                            <div className="flex items-center gap-2">
                              <Button
                                disabled={isPending}
                                type="button"
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() =>
                                  startTransition(async () => {
                                    const res = await removeItemFromCart(
                                      cartItem.productId
                                    );
                                    if (!res.success) {
                                      toast.error(res.message);
                                      return;
                                    }
                                  })
                                }
                              >
                                {isPending ? (
                                  <Loader className="w-3 h-3 md:w-4 md:h-4 animate-spin" />
                                ) : (
                                  <Minus className="w-3 h-3 md:w-4 md:h-4" />
                                )}
                              </Button>
                              <span className="w-6 md:w-8 text-center">
                                {cartItem.qty}
                              </span>
                              <Button
                                disabled={isPending}
                                type="button"
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() =>
                                  startTransition(async () => {
                                    const res = await addItemToCart(cartItem);
                                    if (!res.success) {
                                      toast.error(res.message);
                                      return;
                                    }
                                  })
                                }
                              >
                                {isPending ? (
                                  <Loader className="w-3 h-3 md:w-4 md:h-4 animate-spin" />
                                ) : (
                                  <Plus className="w-3 h-3 md:w-4 md:h-4" />
                                )}
                              </Button>
                            </div>
                            <button
                              onClick={() =>
                                startTransition(async () => {
                                  const res = await deleteFromCart(
                                    cartItem.productId
                                  );
                                  if (!res.success) {
                                    toast.error(res.message);
                                    return;
                                  }

                                  toast.success(res.message);
                                })
                              }
                              className="px-2 py-1 md:px-3 md:py-1 bg-red-500 text-white text-xs md:text-sm rounded-md hover:bg-red-600 transition-colors flex items-center gap-1"
                            >
                              {isPending ? (
                                <Loader className="h-3 w-3 md:h-4 md:w-4 animate-spin" />
                              ) : (
                                <Trash className="h-3 w-3 md:h-4 md:w-4" />
                              )}
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-0">
              <OrderSummary
                itemsTotalPrice={Number(cart.itemsPrice)}
                taxPrice={Number(cart.taxPrice)}
                totalPrice={Number(cart.totalPrice)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTable;
