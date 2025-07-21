import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

// Use the function form to extend the config
export default withNextIntl((nextConfig: NextConfig = {}) => ({
  ...nextConfig,
  images: {
    ...(nextConfig.images || {}),
    domains: [
      ...(nextConfig.images?.domains || []),
      "assets.emirbaycan.com.tr"
    ]
  }
}));
