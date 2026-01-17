import React from "react";
import type { Metadata } from "next";
import "@/theme/global.css";
import { MainLayout } from "@/layouts";

export const metadata: Metadata = {
  title: "Konza Learning Center",
  description: "School",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <MainLayout>{children}</MainLayout>
      </body>
      </html>
  );
}
