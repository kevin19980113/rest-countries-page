import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import MainHeader from "@/app/components/main-header/MainHeader";
import Provider from "./provider";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Rest Countries App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <Provider>
          <MainHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
