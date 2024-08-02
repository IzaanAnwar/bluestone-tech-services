import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Bluestone Tech Services",
  description:
    "Get in touch with us at Bluestone Tech Services. Our team is ready to assist you with any inquiries, provide support, or discuss potential projects. Reach out to us for more information about our services and solutions.",
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

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with us at Bluestone Tech Services. Our team is ready to assist you with any inquiries, provide support, or discuss potential projects. Reach out to us for more information about our services and solutions."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
