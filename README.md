# Minimal Portfolio (Next.js 15, SSR, Multi-language)

A modern, multi-language personal portfolio web app built with Next.js 15 (App Router). Designed for developers who value clean architecture, modularity, and rapid customization. Supports server-side rendering, dynamic routing, theme switching, and internationalization out-of-the-box.

## Features

* ⚡ **Next.js 15 (App Router, SSR)**
* 🌐 **Multi-language support (EN/TR) via next-intl**
* 🎨 **Responsive design with Tailwind CSS & Radix UI**
* 💌 **Contact form with API route (Nodemailer & Sendgrid support)**
* 🗂️ **Modular, maintainable component structure**
* 🔍 **SEO and performance optimized**
* 📝 **Dynamic career, experience, contribution, skills, and resume sections**
* 🔒 **ESLint, Prettier, TypeScript for code quality and consistency**

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/emirbaycan/portfolio-next.js-ssr.git
cd portfolio-next.js-ssr
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root with the following content:

```env
# Google Analytics
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=G-XXXXXXXXXX

# Public Resume Download Link
NEXT_PUBLIC_RESUME_LINK=your_resume_link

# SMTP Configuration (for contact form emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=dev.emirbaycan@gmail.com
SMTP_PASS=your_smtp_password
CONTACT_RECEIVER_EMAIL=dev.emirbaycan@gmail.com

# App Port (optional, defaults to 3000)
PORT=3000
```

**Variable descriptions:**

* `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`: Your Google Analytics 4 measurement ID (optional).
* `NEXT_PUBLIC_RESUME_LINK`: Public direct link to your resume file (PDF, Google Drive, etc.).
* `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`: Credentials and config for SMTP mail server (used in contact form).
* `CONTACT_RECEIVER_EMAIL`: Destination email for contact form messages.
* `PORT`: The port your app will run on (default is 3000).

### 3. Run Development Server

```bash
npm run dev
```

App runs at: [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```text
.
├── app/                # Route-based pages & API (App Router)
│   ├── api/contact     # Contact API route
│   └── [locale]/       # Multi-language pages (career, experience, resume, etc.)
├── assets/fonts/       # Custom fonts
├── components/         # UI components (modals, forms, career, experience, etc.)
├── config/             # App and theme configuration
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization helpers/config
├── lib/                # Utilities, data access, helpers
├── providers/          # Providers (theme, intl, etc.)
├── public/
│   ├── career/         # Images
│   ├── experience/     # Images
│   └── locales/        # Translation JSON files (en, tr)
└── ...
```

---

## Internationalization

* Translation files under `public/locales/en` and `public/locales/tr`
* App router supports `[locale]` directory for dynamic multi-language pages

---

## Main Dependencies

* **next** `^15.x`
* **next-intl**
* **tailwindcss**
* **framer-motion**
* **lucide-react**
* **radix-ui**
* **nodemailer** & **@sendgrid/mail**

(See `package.json` for a complete list.)

---

## Deployment

Build and start production server:

```bash
npm run build
npm start
```

*Default port: **3000***

---

## Contribution

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## License

MIT

---

**Emir Baycan | [emirbaycan.com.tr](https://emirbaycan.com.tr)**
