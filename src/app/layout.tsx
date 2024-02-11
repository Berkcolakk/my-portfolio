import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/layouts";

const inter = Roboto({ subsets: ["latin"], weight: '400', });

export const metadata: Metadata = {
  title: "Berk Çolak",
  description: "Full Stack Developer",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-darkMain bg-lightMain w-screen h-screen`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
