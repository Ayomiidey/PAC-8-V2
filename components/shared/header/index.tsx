import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";

const APP_NAME = "PAC-8";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logoPac8.jpg"
              alt={`${APP_NAME} Logo`}
              height={48}
              width={48}
              priority={true}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/cart" className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
          </Button>

          <Button asChild className="hidden sm:flex">
            <Link href="/sign-in" className="flex items-center gap-2">
              <UserIcon size={20} />
              <span>Sign In</span>
            </Link>
          </Button>

          <Button asChild variant="ghost" className="sm:hidden">
            <Link href="/cart">
              <ShoppingCart size={20} />
            </Link>
          </Button>

          <Button asChild className="sm:hidden">
            <Link href="/sign-in">
              <UserIcon size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
