import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { Providers, ReactQueryProvider } from "@/app/providers";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueStone",
  description:
    "Bluestone Tech Services Pvt Ltd. offers a wide range of IT solutions including managed services, cloud, security, networking and software solutions.",
  keywords: [
    "Bluestone Tech Services",
    "IT Consulting Company",
    "Software Development",
    "Networking",
    "Data Center",
    "Voice and Video",
    "Wireless Solutions",
    "High Performance Computing",
    "DPU-GPU",
    "VDI",
    "Wi-Fi",
    "WI Mesh",
    "Converged Networks",
    "Service Provider",
    "Servers",
    "Cloud Computing",
    "Virtualization",
    "Security",
    "Data Protection",
    "Unified Communication",
    "Custom Software Development",
  ],

  robots: "index, follow",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
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
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
