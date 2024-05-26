import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import AuthWrapper from "@/redux/AuthWrapper";
import Script from "next/script";

const raleway = Raleway({ subsets: ["latin-ext"] });

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
      <ReduxProvider>
        <AuthWrapper>
          <body className={raleway.className}>
            <main>{children}</main>
            <Toaster />
          </body>
        </AuthWrapper>
      </ReduxProvider>
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2reipFj543d77O2igMahuGglg-LTRI70&libraries=places" />
    </html>
  );
}
