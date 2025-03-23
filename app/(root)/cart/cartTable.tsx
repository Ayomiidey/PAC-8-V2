"use client";

import { Cart } from "@/types";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
} from "@/lib/actions/cart.action";
import {
  ArrowRight,
  Loader,
  Minus,
  Plus,
  ShoppingCart,
  Trash,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import OrderSummary from "./orderSummary";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <>
      {!cart || cart.items.length === 0 ? (
        <div>
          Your Cart is Empty. <Link href="/">Go Shopping!</Link>
        </div>
      ) : (
        <div className="container mx-auto mb-5 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[calc(100vh-14rem)]">
                <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Your Shopping Cart (
                      {cart.items.reduce((a, c) => a + c.qty, 0)} items)
                    </h2>
                  </div>
                </div>

                <div className="overflow-y-auto h-[calc(100%-5rem)]">
                  <div className="p-6">
                    <div className="space-y-4">
                      {cart.items.map((cartItem) => (
                        <div
                          key={cartItem.slug}
                          className="flex flex-row items-center gap-4 p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100"
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg flex-shrink-0">
                            <Link href={`/product/${cartItem.slug}`}>
                              <Image
                                src={cartItem.image}
                                alt={cartItem.name}
                                width={100}
                                height={100}
                              />
                            </Link>
                          </div>

                          <div className="flex-grow">
                            <h3 className="font-medium text-sm sm:text-lg">
                              {cartItem.name}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm">
                              Unit Price: ${cartItem.price}
                            </p>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2">
                              <Button
                                disabled={isPending}
                                type="button"
                                variant="outline"
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
                                  <Loader className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Minus className="w-4 h-4" />
                                )}
                              </Button>
                              <span className="w-8 text-center">
                                {cartItem.qty}
                              </span>
                              <Button
                                disabled={isPending}
                                type="button"
                                variant="outline"
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
                                  <Loader className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Plus className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                            {/* <p className="font-medium">
                        ${cartItem.totalPrice.toFixed(2)}
                      </p> */}
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
                              className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-1"
                            >
                              {isPending ? (
                                <Loader className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash className="h-4 w-4" />
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

            <div className="md:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTable;
