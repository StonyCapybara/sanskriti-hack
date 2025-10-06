import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYPEN",
  description: "everything you need in one place",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
