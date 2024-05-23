import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "../components/navigation/NavigationBar";
import Footer from "../components/footer";
import FloatingBackToTop from "../components/shared/FloatingBackToTop";
import FloatingWhatsapp from "../components/shared/FloatingWhatsapp";

import { LangParams, LangProps } from "@/types/lang";
import { LANGS, dictionary } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const wordings = dictionary[params.lang || 'es'];
  return {
    title: wordings.title,
    description: wordings.description,
    keywords: ['software development', 'custom applications', 'enterprise solutions', 'web development', 'bespoke programming', 'software design', 'technology consulting', 'business software', 'mobile development', 'technological innovation']
  }
}

export async function generateStaticParams() {
  return LANGS.map(lang => ({ lang }));
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: LangProps
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className={inter.className}>
        <NavigationBar lang={params.lang} />
        {children}
        <FloatingWhatsapp />
        <FloatingBackToTop />
        <Footer />
      </body>
    </html>
  );
}
