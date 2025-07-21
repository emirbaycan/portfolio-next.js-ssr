const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
  images: {
    domains: [
      "assets.emirbaycan.com.tr"
    ]
  }
};

module.exports = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: [
      './messages/en.json',
      './messages/tr.json'
    ]
  }
})(nextConfig);
