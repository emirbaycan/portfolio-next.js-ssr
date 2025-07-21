import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { routesConfig } from "@/config/routes";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "tr"] as const;

type LayoutProps = {
  children: ReactNode;  
  params: { locale: Locale };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="container z-50 bg-background">
            <div className="flex h-20 items-center justify-between py-6">
              <MainNav items={routesConfig.mainNav} />
              <nav className="flex items-center gap-5">
                <ModeToggle />
              </nav>
            </div>
          </header>
          <main className="container flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
