import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Mahesh Kale | Backend Engineer & Developer",
  description: "Backend engineer crafting scalable systems with Golang, Python, and modern DevOps. Exploring distributed systems, microservices, and cloud-native technologies.",
  keywords: ["Backend", "DevOps", "Golang", "Python", "Architecture", "Systems Design"],
  openGraph: {
    title: "Mahesh Kale | Backend Engineer",
    description: "Backend engineer crafting scalable systems",
    url: "https://mahesh.dev",
    siteName: "mahesh.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        <Header />
        <main className="content-wrapper min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
