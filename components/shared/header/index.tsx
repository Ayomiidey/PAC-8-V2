import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

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
        <Menu />
      </div>
    </header>
  );
};

export default Header;
