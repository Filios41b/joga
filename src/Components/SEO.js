import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = () => {
  const location = useLocation();

  const baseUrl = "https://jogafunkcjonalna.pl";
  const image = `${baseUrl}/icons/logo512.png`;

  const seoData = {
    "/": {
      title: "Joga Funkcjonalna",
      description:
        "Zajęcia łączące elementy treningu funkcjonalnego, pilatesu oraz łagodnej jogi, odpowiednie zarówno dla osób aktywnych, jak i wracających do ruchu po przerwie.",
    },
    "/cennik": {
      title: "Cennik | Joga Funkcjonalna",
      description: "Sprawdź ceny zajęć jogi funkcjonalnej oraz dostępne karnety treningowe.",
    },
    "/kontakt": {
      title: "Kontakt | Joga Funkcjonalna",
      description: "Skontaktuj się z nami i zapisz się na zajęcia jogi funkcjonalnej.",
    },
    "/galeria": {
      title: "Galeria | Joga Funkcjonalna",
      description: "Zobacz zdjęcia z zajęć jogi funkcjonalnej.",
    },
    "/zapisy": {
      title: "Zapisy | Joga Funkcjonalna",
      description: "Zapisz się na zajęcia jogi funkcjonalnej i rozpocznij trening.",
    },
  };

  const { title, description } = seoData[location.pathname] || {
    title: "Joga Funkcjonalna",
    description:
      "Zajęcia jogi funkcjonalnej, pilates i łagodna joga dla każdego.",
  };

  const url = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta name="author" content="Joga Funkcjonalna" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Joga Funkcjonalna" />
      <meta property="og:locale" content="pl_PL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Joga Funkcjonalna",
          url: url,
          logo: image,
          description: description,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;