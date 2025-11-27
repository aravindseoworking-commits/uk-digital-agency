import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Theme Color */}
          <meta name="theme-color" content="#ffffff" />

          {/* Basic SEO */}
          <meta name="description" content="UK Based Digital Marketing Agency – SEO, PPC, Social Media, Branding & Website Services." />
          <meta name="keywords" content="Digital Marketing UK, SEO Agency UK, PPC Management, Social Media Agency, Technical SEO" />

          {/* Preload Google Font */}
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* OG Tags for Social Sharing */}
          <meta property="og:title" content="UK Digital Marketing Agency" />
          <meta property="og:description" content="Professional SEO, PPC & Social Media Agency in the UK." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:locale" content="en_GB" />

        </Head>

        <body className="font-inter bg-white text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
