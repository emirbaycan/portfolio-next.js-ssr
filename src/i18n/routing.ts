import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      tr: '/pfadnamen'
    }
  }
});
