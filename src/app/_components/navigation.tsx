import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { BrandIconMobile } from "./svg/brandMobile";
import { BrandIconDesktop } from "./svg/brandDesktop";
import { DesktopNav } from "./desktop-nav";


export function NavigationHeader() {
  return (
    <nav className="bg-transparent text-zinc-900 text-zinc-50 transition-all duration-500 dark:text-zinc-100">
      <Container>
        <div className="flex py-4 lg:flex-row items-center justify-between  ">
          <BrandIconMobile />
          <BrandIconDesktop />
          <MobileNav />
          <DesktopNav />
          <div className="hidden md:block absolute top-4 right-4">
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavigationHeader;
