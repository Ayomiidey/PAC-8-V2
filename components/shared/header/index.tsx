import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="images/logoPac8.jpg"
              alt={`${APP_NAME} Logo`}
              height={48}
              width={48}
              priority={true}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
