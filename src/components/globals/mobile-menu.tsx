import Link from "next/link";
import React from "react";
import { Menu} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
interface Props {
  navLinks: { name: string; href: string }[];
}
const MobileMenu = ({ navLinks }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer" size={24} />
      </SheetTrigger>
      <SheetContent
        className="w-[100%] bg-white transition-all sm:max-w-[500px]"
        side={"right"}
      >
        <SheetTitle className="opacity-0"></SheetTitle>
        <SheetHeader className="relative">
          <Link
            href="/"
            className="text-primary flex items-center gap-1 text-2xl font-bold tracking-tight"
          >
            🧙‍♂️
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              PostWizard
            </span>
          </Link>
        </SheetHeader>
        {navLinks.length && (
          <div className="mt-5 pb-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/signup"
                className="bg-primary mt-2 rounded-md px-4 py-2 text-center text-white"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
