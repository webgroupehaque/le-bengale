import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Le Bengale - Restaurant Indien à Nancy | Commande en Ligne",
  description = "Restaurant indien authentique à Nancy. Commandez en ligne vos plats préférés : tandoori, curry, biryani, naan. Livraison rapide à Nancy et alentours.",
  keywords = "restaurant indien nancy, cuisine indienne nancy, tandoori nancy, curry nancy, biryani nancy, livraison indien nancy",
  image = "https://le-bengale.netlify.app/og-image.jpg",
  url = "https://le-bengale.netlify.app"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Le Bengale",
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "51 Rue de la Hache",
      "addressLocality": "Nancy",
      "addressRegion": "Grand Est",
      "postalCode": "54000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.6921",
      "longitude": "6.1844"
    },
    "url": url,
    "telephone": "+33383375670",
    "servesCuisine": "Indienne",
    "priceRange": "€€",
    "acceptsReservations": true,
    "menu": `${url}/commander`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:30",
        "closes": "23:30"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Le Bengale" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
