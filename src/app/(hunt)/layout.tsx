import "~/styles/globals.css";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { HuntHamburgerMenu } from "./HuntHamburgerMenu";
import { HuntTopNavSpacer } from "@/components/nav/HuntTopNavSpacer";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body className="bg-main-bg bg-gradient-to-t from-layout-gradient to-main-bg text-main-text">
      {/* Navbar */}
      <div className="bg-nav-bg">
        <HuntHamburgerMenu />
      </div>

      {/* Navbar spacer */}
      <HuntTopNavSpacer />
      <main className="min-h-[calc(100vh-56px-32px)]">{children}</main>
      <Toaster />

      {/* Easier to remove the footer by changing text color */}
      <footer className="bg-footer-bg py-2 text-center text-xs text-footer-bg">
        <p className="hidden sm:block">
          .
        </p> 
      </footer>
    </body>
  );
}
