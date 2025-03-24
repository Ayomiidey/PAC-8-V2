import { getMyCart } from "@/lib/actions/cart.action";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Shipping Address" };

const ShippingAddress = async () => {
  const cart = await getMyCart();
  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();

  const userId = await session?.user?.id;

  if (!userId) throw new Error("There is no user");

  const user = await getUserById(userId);
  return <>Address</>;
};

export default ShippingAddress;
