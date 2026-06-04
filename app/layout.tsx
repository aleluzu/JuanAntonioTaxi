import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taxi10guadix.es"),
  title: "Taxi en Guadix y Baños de Graena | Juan Antonio Requena",
  description:
    "Juan Antonio Requena, taxi nº 10 de Guadix y taxi nº 2 de Baños de Graena. Traslados locales, aeropuertos, centros médicos, empresas y servicios escolares.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Taxi en Guadix y Baños de Graena | Juan Antonio Requena",
    description:
      "Taxi de confianza en Guadix, Baños de Graena y comarca. Llama al 689 281 042 o reserva por WhatsApp.",
    url: "https://taxi10guadix.es",
    siteName: "Juan Antonio Requena Taxi",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/rav4.png",
        width: 1200,
        height: 630,
        alt: "Toyota RAV4 blanco de Juan Antonio Requena",
      },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Juan Antonio Requena",
  url: "https://taxi10guadix.es",
  telephone: "+34689281042",
  areaServed: [
    "Guadix",
    "Baños de Graena",
    "Comarca de Guadix",
    "Aeropuerto de Granada",
    "Provincia de Granada",
  ],
  serviceType: [
    "Aeropuertos",
    "Mutuas y centros médicos",
    "Empresas",
    "Particulares",
    "Servicios escolares",
  ],
  description:
    "Taxi profesional en Guadix y Baños de Graena. Taxi nº 10 de Guadix y taxi nº 2 de Baños de Graena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/rav4-mobile.webp"
          media="(max-width: 640px)"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/rav4-desktop.webp"
          media="(min-width: 641px)"
          type="image/webp"
        />
      </head>
      <body className={geist.variable}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M0ZF512S4S"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0ZF512S4S');
          `}
        </Script>
        <Script
          id="local-business-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(localBusinessJsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}
