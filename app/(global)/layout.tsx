"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Providers, ReactQueryProvider } from "../providers";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Toaster
          duration={2000}
          position="bottom-center"
          toastOptions={{
            classNames: {
              success: "bg-green-500 text-white border-green-800",
              error: "bg-red-500 text-white border-red-800",
              warning: "bg-yellow-500 text-white border-yellow-800",
              info: "bg-primary text-white border-primary",
            },
          }}
        />
        <ReactQueryProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
