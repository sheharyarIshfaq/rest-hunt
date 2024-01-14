import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Footer from "@/components/Shared/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RestHunt",
  description: "A shared accommodation platform for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
