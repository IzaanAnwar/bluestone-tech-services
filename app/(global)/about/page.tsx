import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bluestone Tech Services",
  description:
    "Bluestone Tech Services is a leading IT consulting company specializing in converged networks with comprehensive solutions for Data, Voice, Video, LAN, WAN, Wireless, HPC, DPU-GPU, VDI, Wi-Fi, and WI Mesh technologies. We simplify and deploy complex projects with cutting-edge technologies, ensuring seamless and efficient implementations.",
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

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At Bluestone Tech Services we have a strong technical team background which helps us in implementing & Maintaining Converged Networks with end to end solution for Data, Voice and Video, LAN and WAN Access Products, Wireless Solutions, HPC, DPU-GPU, VDI, Wi-Fi, WI Mesh, turnkey projects with cutting edge technologies. There by making complex projects simpler and easily deployable"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
