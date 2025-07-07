
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { WalletProvider } from "@/lib/wallet/context";
import { Toaster } from "@/components/ui/toaster";
require("@solana/wallet-adapter-react-ui/styles.css");

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Korra.fun",
  description: "Generate and launch Solana dApps with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          {children}
          <Toaster />
        </WalletProvider>
      </body>
    </html>
  );
}