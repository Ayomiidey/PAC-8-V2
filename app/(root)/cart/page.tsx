import CartTable from "./cartTable";
import { getMyCart } from "@/lib/actions/cart.action";

export const metadata = { title: "Shopping Cart" };

const CartPage = async () => {
  const cart = await getMyCart();
  return (
    // <>
    //   <CartTable cart={cart} />
    // </>
    <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-8  max-w-[100vw]">
      <CartTable cart={cart} />
    </div>
  );
};

export default CartPage;
