import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  const title = "Joga Funkcjonalna";
  const description = `Zajęcia łączące elementy treningu funkcjonalnego, pilatesu i łagodnej jogi, odpowiednie dla aktywnych i wracających do ruchu po przerwie.`;

  const url = "https://jogafunkcjonalna.pl";
  const image = `${url}/icons/logo512.png`;

  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Author */}
      <meta name="author" content="Joga Funkcjonalna" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Joga Funkcjonalna",
          url: url,
          logo: image
        })}
      </script>
    </Helmet>
  );
};

export default SEO;