import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user.action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

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

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";
  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="w-8 h-8 ml-2 rounded-full bg-gray-200"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button
                variant="ghost"
                className="w-full py-4 px-2 h-4 justify-start"
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
