import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@/components/common/analytics";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";
import { I18nProvider } from "../providers/i18n";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
  if (!GA_ID) {
    throw new Error("Missing Google Analytics ID");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <I18nProvider locale="en" messages={{}}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={[
              "light",
              "dark",
              "retro",
              "cyberpunk",
              "paper",
              "aurora",
              "synthwave",
            ]}
          >
            {children}
            <Analytics />
            <Toaster />
            <ModalProvider />
          </ThemeProvider>
        </I18nProvider>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
