'use client';
import { NextIntlClientProvider } from 'next-intl';

export function I18nProvider({
  children,
  locale,
  messages
}: {
  children: React.ReactNode;
  locale: 'en' | 'tr' | undefined;
  messages: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}