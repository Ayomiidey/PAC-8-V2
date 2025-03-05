import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { signOutUser } from "@/lib/actions/user.action";
import { UserIcon } from "lucide-react";
const UserButton = async () => {
  const session = await auth();
  if (!session) {
    return (
      <>
        <Button asChild className="hidden sm:flex">
          <Link href="/sign-in" className="flex items-center gap-2">
            <UserIcon size={20} />
            <span>Sign In</span>
          </Link>
        </Button>

        <Button asChild className="sm:hidden">
          <Link href="/sign-in">
            <UserIcon size={20} />
          </Link>
        </Button>
      </>
    );
  }
  return <div>User</div>;
};

export default UserButton;
