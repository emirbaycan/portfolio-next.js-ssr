"use client";

import { motion, easeInOut } from "framer-motion";
import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment, useRouter } from "next/navigation";
import * as React from "react";
import { useMessages } from "next-intl";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const locales = ["en", "tr"];

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: easeInOut, // Use the imported easing function
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const messages = useMessages();
  const router = useRouter();
  // Use mainNav from messages if available, otherwise fallback to props
  const navItems: NavItem[] | undefined = messages?.routesConfig?.mainNav
    ? (messages.routesConfig.mainNav as NavItem[])
    : items;

  // Get current locale from pathname (assuming /[locale]/...)
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Replace the first segment with the new locale
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
  };

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex gap-6 md:gap-10 items-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className={cn(norican.className, "text-2xl")}>
            Emir Baycan
          </span>
        </Link>
      </motion.div>
      {navItems?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      ) : null}
      {/* Language selector */}
      <select
        value={currentLocale}
        onChange={handleLocaleChange}
        className="border rounded px-2 py-1 ml-auto mr-10 text-sm bg-background"
        aria-label="Select language"
      >
        {locales.map((locale) => (
          <option value={locale} key={locale}>
            {locale === "en" ? "English" : "Türkçe"}
          </option>
        ))}
      </select>
      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </motion.button>
      {showMobileMenu && navItems && (
        <MobileNav items={navItems}>{children}</MobileNav>
      )}
    </div>
  );
}
