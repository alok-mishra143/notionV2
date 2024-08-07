import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/lib/provider/next-theme-provider";
import AppStateProvider from "@/lib/provider/state-provider";
import {
  SupabaseUserProvider,
  useSupabaseUser,
} from "@/lib/provider/supabase-userProvider";
import { SocketProvider } from "@/lib/provider/socket-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home of Notion clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AppStateProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
          >
            <SupabaseUserProvider>
              <SocketProvider>
                <Analytics />
                {children}
                <Toaster />
              </SocketProvider>
            </SupabaseUserProvider>
          </ThemeProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
