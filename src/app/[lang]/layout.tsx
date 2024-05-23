import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "../components/navigation/NavigationBar";
import Footer from "../components/footer";
import FloatingBackToTop from "../components/shared/FloatingBackToTop";
import FloatingWhatsapp from "../components/shared/FloatingWhatsapp";

import { LangProps } from "@/types/lang";
import { LANGS } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToGrow - IT Solutions",
  description: "We are a specialized software development company, providing tailor-made solutions to meet the specific needs of your business. From web and mobile applications to enterprise software, our team of programming and technological innovation experts is ready to propel your business into the future. Discover how we can turn your ideas into digital realities today.",
  keywords: ['software development', 'custom applications', 'enterprise solutions', 'web development', 'bespoke programming', 'software design', 'technology consulting', 'business software', 'mobile development', 'technological innovation']
};

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
        <NavigationBar />
        {children}
        <FloatingWhatsapp />
        <FloatingBackToTop />
        <Footer />
      </body>
    </html>
  );
}
