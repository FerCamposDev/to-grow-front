import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToGrow - IT Solutions",
  description: "We are a specialized software development company, providing tailor-made solutions to meet the specific needs of your business. From web and mobile applications to enterprise software, our team of programming and technological innovation experts is ready to propel your business into the future. Discover how we can turn your ideas into digital realities today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
