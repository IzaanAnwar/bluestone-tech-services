import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Services";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

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

  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
