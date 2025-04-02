import { getMyCart } from "@/lib/actions/cart.action";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import ShippingAddressForm from "./shipping-address-form";
import type { ShippingAddress } from "@/types";
import CheckoutSteps from "@/components/shared/checkoutSteps";

export const metadata: Metadata = {
  title: "Shipping Address",
};

const ShippingAddressPage = async () => {
  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = await session?.user?.id;
  if (!userId) throw new Error("There is no user");

  const user = await getUserById(userId);
  return (
    <>
      <CheckoutSteps current={1} />
      <ShippingAddressForm address={user.address as ShippingAddress} />
    </>
  );
};

export default ShippingAddressPage;
