"use client";

import { formatCurrency } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useTransition } from "react";

const OrderSummary = ({
  totalPrice,
  taxPrice,
  itemsTotalPrice,
}: {
  totalPrice: number;
  taxPrice: number;
  itemsTotalPrice: number;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <div className="md:col-span-1">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-4">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Order Summary</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span className="font-medium">
                {formatCurrency(itemsTotalPrice)}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Tax</span>
              <span className="font-medium">{formatCurrency(taxPrice)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-medium">Total</span>
              <span className="font-bold text-lg">
                {formatCurrency(totalPrice)}
              </span>
            </div>

            <button
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors flex items-center justify-center gap-2"
              onClick={() =>
                startTransition(() => router.push("/shipping-address"))
              }
            >
              <span>
                <ArrowRight />
              </span>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
