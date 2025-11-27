import Head from 'next/head'

export default function SeoHead({ title, description, url, image }) {
  const site = {
    title: title || 'UK Digital Marketing Agency',
    description: description || 'Top UK digital marketing agency offering SEO, PPC, SMM, branding, content strategy and GEO SEO solutions.',
    url: url || 'https://your-domain.co.uk',
    image: image || '/hero-marketing.jpg'
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": site.title,
    "url": site.url,
    "logo": site.image,
    "description": site.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    }
  }
  return (
    <Head>
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={site.image} />
      <meta property="og:url" content={site.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}
