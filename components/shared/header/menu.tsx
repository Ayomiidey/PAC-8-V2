import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <Button asChild variant="ghost" className="hidden sm:flex">
          <Link href="/cart" className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </Button>
        <div className="hidden sm:flex">
          <UserButton />
        </div>

        <Button asChild variant="ghost" className="sm:hidden">
          <Link href="/cart">
            <ShoppingCart size={20} />
          </Link>
        </Button>
        <div className="sm:hidden">
          <UserButton />
        </div>
      </div>
    </>
  );
};

export default Menu;
