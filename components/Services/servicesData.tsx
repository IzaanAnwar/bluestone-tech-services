import { Service } from "@/types/service";

const servicesData: Service[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-server"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),

    title: "High Performance Computing Solution",
    paragraph:
      "Optimized and scalable computing solutions to handle intensive computational tasks efficiently and effectively.",
    subServices: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cloud-cog"
          >
            <circle cx="12" cy="17" r="3" />
            <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
            <path d="m15.7 18.4-.9-.3" />
            <path d="m9.2 15.9-.9-.3" />
            <path d="m10.6 20.7.3-.9" />
            <path d="m13.1 14.2.3-.9" />
            <path d="m13.6 20.7-.4-1" />
            <path d="m10.8 14.3-.4-1" />
            <path d="m8.3 18.6 1-.4" />
            <path d="m14.7 15.8 1-.4" />
          </svg>
        ),
        title: "HPC Cloud Solutions",
        paragraph:
          "Scalable cloud solutions specifically tailored for high-performance computing needs.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-folder-tree"
          >
            <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
            <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
            <path d="M3 5a2 2 0 0 0 2 2h3" />
            <path d="M3 3v13a2 2 0 0 0 2 2h3" />
          </svg>
        ),
        title: "Parallel File Systems",
        paragraph:
          "Efficient file systems designed to handle parallel processing and high data throughput.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-combine"
          >
            <rect width="8" height="8" x="2" y="2" rx="2" />
            <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
            <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
            <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
            <polyline points="7 21 10 18 7 15" />
            <rect width="8" height="8" x="14" y="14" rx="2" />
          </svg>
        ),
        title: "HPC Cluster Solutions",
        paragraph:
          "Robust cluster solutions to maximize computational power and performance.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-database-zap"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 15 21.84" />
            <path d="M21 5V8" />
            <path d="M21 12L18 17H22L19 22" />
            <path d="M3 12A9 3 0 0 0 14.59 14.87" />
          </svg>
        ),
        title: "DPU",
        paragraph:
          "Data Processing Units to accelerate data-centric workloads and enhance performance.",
      },
      {
        id: 5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-grid-2x2-check"
          >
            <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
            <path d="m16 19 2 2 4-4" />
          </svg>
        ),
        title: "Big Data",
        paragraph:
          "Solutions for managing and analyzing vast amounts of data efficiently.",
      },
      {
        id: 6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-hard-drive"
          >
            <line x1="22" x2="2" y1="12" y2="12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            <line x1="6" x2="6.01" y1="16" y2="16" />
            <line x1="10" x2="10.01" y1="16" y2="16" />
          </svg>
        ),
        title: "CPU",
        paragraph:
          "High-performance CPUs designed for intensive computational tasks.",
      },
      {
        id: 7,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chart-network"
          >
            <path d="m13.11 7.664 1.78 2.672" />
            <path d="m14.162 12.788-3.324 1.424" />
            <path d="m20 4-6.06 1.515" />
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <circle cx="12" cy="6" r="2" />
            <circle cx="16" cy="12" r="2" />
            <circle cx="9" cy="15" r="2" />
          </svg>
        ),
        title: "GPU Computing Solutions",
        paragraph:
          "Advanced GPU solutions to accelerate high-performance computing applications.",
      },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-globe"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),

    id: 2,
    title: "Network Solutions",
    paragraph:
      "Reliable and secure network infrastructure tailored to meet your specific business needs and ensure seamless connectivity.",
    subServices: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-umbrella-off"
          >
            <path d="M12 2v1" />
            <path d="M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" />
            <path d="M17.5 12H22A10 10 0 0 0 9.004 3.455" />
            <path d="m2 2 20 20" />
          </svg>
        ),
        title: "Risk Management",
        paragraph:
          "Comprehensive strategies to identify, assess, and mitigate network risks.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-radar"
          >
            <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
            <path d="M4 6h.01" />
            <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
            <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
            <path d="M12 18h.01" />
            <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
            <circle cx="12" cy="12" r="2" />
            <path d="m13.41 10.59 5.66-5.66" />
          </svg>
        ),
        title: "Vulnerability Assessments",
        paragraph:
          "Thorough assessments to identify and address network vulnerabilities.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-shield-alert"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        ),
        title: "Threat Detection",
        paragraph:
          "Advanced threat detection systems to protect your network from cyber threats.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-antenna"
          >
            <path d="M2 12 7 2" />
            <path d="m7 12 5-10" />
            <path d="m12 12 5-10" />
            <path d="m17 12 5-10" />
            <path d="M4.5 7h15" />
            <path d="M12 16v6" />
          </svg>
        ),
        title: "Network Monitoring",
        paragraph:
          "Continuous monitoring of your network to ensure optimal performance and security.",
      },
      {
        id: 5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-network"
          >
            <rect x="16" y="16" width="6" height="6" rx="1" />
            <rect x="2" y="16" width="6" height="6" rx="1" />
            <rect x="9" y="2" width="6" height="6" rx="1" />
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
            <path d="M12 12V8" />
          </svg>
        ),

        title: "Structure Cabling",
        paragraph:
          "Structured cabling solutions to support and optimize your network infrastructure.",
      },
      {
        id: 6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-wifi"
          >
            <path d="M12 20h.01" />
            <path d="M2 8.82a15 15 0 0 1 20 0" />
            <path d="M5 12.859a10 10 0 0 1 14 0" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" />
          </svg>
        ),
        title: "Wireless Network",
        paragraph:
          "Reliable and secure wireless networking solutions for seamless connectivity.",
      },
      {
        id: 7,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cable"
          >
            <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
            <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
            <path d="M21 21v-2h-4" />
            <path d="M3 5h4V3" />
            <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
          </svg>
        ),

        title: "Wired Network",
        paragraph:
          "High-speed wired networking solutions for stable and secure connections.",
      },
    ],
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-server-cog"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    ),

    id: 3,
    title: "Data Center Solution",
    paragraph:
      "State-of-the-art data center solutions that provide robust storage, backup, and disaster recovery services.",
    subServices: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-headset"
          >
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
        ),
        title: "Server Management & Support",
        paragraph:
          "Comprehensive management and support services for your servers.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-database-backup"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 12a9 3 0 0 0 5 2.69" />
            <path d="M21 9.3V5" />
            <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
            <path d="M12 12v4h4" />
            <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
          </svg>
        ),
        title: "Data Backup & Disaster Recovery",
        paragraph:
          "Reliable data backup and disaster recovery solutions to protect your critical data.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-radar"
          >
            <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
            <path d="M4 6h.01" />
            <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
            <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
            <path d="M12 18h.01" />
            <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
            <circle cx="12" cy="12" r="2" />
            <path d="m13.41 10.59 5.66-5.66" />
          </svg>
        ),
        title: "Vulnerability Assessments",
        paragraph:
          "Assessments to identify and mitigate vulnerabilities in your data center.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-shield-half"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M12 22V2" />
          </svg>
        ),
        title: "Server Hardening",
        paragraph:
          "Techniques and practices to enhance the security of your servers.",
      },
      {
        id: 5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-earth-lock"
          >
            <path d="M7 3.34V5a3 3 0 0 0 3 3" />
            <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
            <path d="M12 2a10 10 0 1 0 9.54 13" />
            <path d="M20 6V4a2 2 0 1 0-4 0v2" />
            <rect width="8" height="5" x="14" y="6" rx="1" />
          </svg>
        ),
        title: "Network Services",
        paragraph:
          "Comprehensive network services to support your data center operations.",
      },
      {
        id: 6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-fence"
          >
            <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
            <path d="M6 8h4" />
            <path d="M6 18h4" />
            <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
            <path d="M14 8h4" />
            <path d="M14 18h4" />
            <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
          </svg>
        ),
        title: "Colocation Services",
        paragraph:
          "Colocation services to house your servers in a secure and managed environment.",
      },
      {
        id: 7,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-blinds"
          >
            <path d="M3 3h18" />
            <path d="M20 7H8" />
            <path d="M20 11H8" />
            <path d="M10 19h10" />
            <path d="M8 15h12" />
            <path d="M4 3v14" />
            <circle cx="4" cy="19" r="2" />
          </svg>
        ),
        title: "Server Racks",
        paragraph:
          "High-quality server racks to optimize the organization and management of your servers.",
      },
      {
        id: 8,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-air-vent"
          >
            <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M6 8h12" />
            <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
            <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
          </svg>
        ),
        title: "Cooling System",
        paragraph:
          "Efficient cooling systems to maintain optimal operating temperatures for your equipment.",
      },
      {
        id: 9,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-server"
          >
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
          </svg>
        ),
        title: "Servers",
        paragraph:
          "Reliable servers to support your data center's operations and services.",
      },
      {
        id: 10,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-database"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
          </svg>
        ),
        title: "Storage Solution",
        paragraph:
          "Robust storage solutions to handle your data storage needs effectively.",
      },
      {
        id: 11,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cloud-cog"
          >
            <circle cx="12" cy="17" r="3" />
            <path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
            <path d="m15.7 18.4-.9-.3" />
            <path d="m9.2 15.9-.9-.3" />
            <path d="m10.6 20.7.3-.9" />
            <path d="m13.1 14.2.3-.9" />
            <path d="m13.6 20.7-.4-1" />
            <path d="m10.8 14.3-.4-1" />
            <path d="m8.3 18.6 1-.4" />
            <path d="m14.7 15.8 1-.4" />
          </svg>
        ),
        title: "Cloud Server",
        paragraph:
          "Scalable cloud server solutions for flexible and efficient data center operations.",
      },
      {
        id: 12,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-monitor-cog"
          >
            <path d="M12 17v4" />
            <path d="m15.2 4.9-.9-.4" />
            <path d="m15.2 7.1-.9.4" />
            <path d="m16.9 3.2-.4-.9" />
            <path d="m16.9 8.8-.4.9" />
            <path d="m19.5 2.3-.4.9" />
            <path d="m19.5 9.7-.4-.9" />
            <path d="m21.7 4.5-.9.4" />
            <path d="m21.7 7.5-.9-.4" />
            <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
            <path d="M8 21h8" />
            <circle cx="18" cy="6" r="3" />
          </svg>
        ),
        title: "Server Virtualization",
        paragraph:
          "Virtualization solutions to maximize server utilization and efficiency.",
      },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-shield-check"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),

    id: 4,
    title: "Security Solutions",
    paragraph:
      "Comprehensive security solutions to protect your digital assets from threats and ensure data integrity.",
    subServices: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-user-round-check"
          >
            <path d="M2 21a8 8 0 0 1 13.292-6" />
            <circle cx="10" cy="8" r="5" />
            <path d="m16 19 2 2 4-4" />
          </svg>
        ),
        title: "Identity and Access Management",
        paragraph:
          "Solutions to manage user identities and control access to your systems.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-shield-ban"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m4.243 5.21 14.39 12.472" />
          </svg>
        ),
        title: "Cloud Security",
        paragraph:
          "Security measures to protect your cloud environments and data.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-fingerprint"
          >
            <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
            <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
            <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
            <path d="M2 12a10 10 0 0 1 18-6" />
            <path d="M2 16h.01" />
            <path d="M21.8 16c.2-2 .131-5.354 0-6" />
            <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
            <path d="M8.65 22c.21-.66.45-1.32.57-2" />
            <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
          </svg>
        ),
        title: "Endpoint Security",
        paragraph:
          "Protection for endpoint devices against threats and vulnerabilities.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-factory"
          >
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
          </svg>
        ),
        title: "Physical Security",
        paragraph:
          "Measures to safeguard physical access to your data centers and facilities.",
      },
      {
        id: 5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cctv"
          >
            <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
            <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
            <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
            <path d="M2 21v-4" />
            <path d="M7 9h.01" />
          </svg>
        ),
        title: "Data Center Security",
        paragraph:
          "Comprehensive security solutions to protect your data center infrastructure.",
      },
      {
        id: 6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-id-card"
          >
            <path d="M16 10h2" />
            <path d="M16 14h2" />
            <path d="M6.17 15a3 3 0 0 1 5.66 0" />
            <circle cx="9" cy="11" r="2" />
            <rect x="2" y="5" width="20" height="14" rx="2" />
          </svg>
        ),
        title: "Server Security",
        paragraph:
          "Techniques and practices to secure your servers from various threats.",
      },
      {
        id: 7,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-globe-lock"
          >
            <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
            <path d="M2 12h8.5" />
            <path d="M20 6V4a2 2 0 1 0-4 0v2" />
            <rect width="8" height="5" x="14" y="6" rx="1" />
          </svg>
        ),
        title: "Network Security",
        paragraph:
          "Solutions to protect your network infrastructure from cyber threats.",
      },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-handshake"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),

    id: 5,
    title: "Unified Communication Solution",
    paragraph:
      "Integrated communication solutions that enhance collaboration and streamline business processes.",
    subServices: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        ),
        title: "Contact Center",
        paragraph:
          "Solutions to enhance customer interaction and service through an integrated contact center.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-messages-square"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
        ),
        title: "Messaging & Collaboration",
        paragraph:
          "Tools and platforms to enhance team collaboration and communication.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-webhook"
          >
            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
          </svg>
        ),
        title: "VoIP Phone Systems",
        paragraph:
          "Reliable VoIP solutions for efficient and cost-effective communication.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-computer"
          >
            <rect width="14" height="8" x="5" y="2" rx="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <path d="M6 18h2" />
            <path d="M12 18h6" />
          </svg>
        ),
        title: "Smart Classroom",
        paragraph:
          "Technological solutions to create an interactive and effective learning environment.",
      },
      {
        id: 5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-projector"
          >
            <path d="M5 7 3 5" />
            <path d="M9 6V3" />
            <path d="m13 7 2-2" />
            <circle cx="9" cy="13" r="3" />
            <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
            <path d="M16 16h2" />
          </svg>
        ),
        title: "Video Conferencing",
        paragraph:
          "High-quality video conferencing solutions for seamless virtual meetings.",
      },
      {
        id: 6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-audio-waveform"
          >
            <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
          </svg>
        ),
        title: "Audio System IP EPBX",
        paragraph:
          "Integrated audio solutions to enhance communication and collaboration.",
      },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-cpu"
      >
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    ),

    id: 6,
    title: "Software",
    paragraph:
      "Custom software development services to meet the unique demands of your business and drive innovation.",
    subServices: [
      {
        id: 1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-file-box"
          >
            <path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z" />
            <path d="M7 17v5" />
            <path d="M11.7 14.2 7 17l-4.7-2.8" />
          </svg>
        ),
        title: "Supply Chain Management (SCM) Solutions",
        paragraph:
          "Software solutions to optimize and manage your supply chain processes.",
      },
      {
        id: 2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-brain-circuit"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M9 13a4.5 4.5 0 0 0 3-4" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M12 13h4" />
            <path d="M12 18h6a2 2 0 0 1 2 2v1" />
            <path d="M12 8h8" />
            <path d="M16 8V5a2 2 0 0 1 2-2" />
            <circle cx="16" cy="13" r=".5" />
            <circle cx="18" cy="3" r=".5" />
            <circle cx="20" cy="21" r=".5" />
            <circle cx="20" cy="8" r=".5" />
          </svg>
        ),
        title: "Business Intelligence (BI) Solutions",
        paragraph:
          "BI tools to analyze data and derive actionable insights for your business.",
      },
      {
        id: 3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-contact"
          >
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
          </svg>
        ),
        title: "Customer Relationship Management (CRM) Solutions",
        paragraph:
          "CRM systems to manage customer relationships and enhance customer satisfaction.",
      },
      {
        id: 4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chart-no-axes-combined"
          >
            <path d="M12 16v5" />
            <path d="M16 14v7" />
            <path d="M20 10v11" />
            <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
            <path d="M4 18v3" />
            <path d="M8 14v7" />
          </svg>
        ),
        title: "Enterprise Resource Planning (ERP) Solutions",
        paragraph:
          "ERP software to integrate and manage your core business processes.",
      },
      {
        id: 5,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cloud-download"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m8 17 4 4 4-4" />
          </svg>
        ),
        title: "Cloud Migration Services",
        paragraph:
          "Services to seamlessly migrate your business processes to the cloud.",
      },
      {
        id: 6,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-combine"
          >
            <rect width="8" height="8" x="2" y="2" rx="2" />
            <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
            <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
            <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
            <polyline points="7 21 10 18 7 15" />
            <rect width="8" height="8" x="14" y="14" rx="2" />
          </svg>
        ),
        title: "Server Management Services",
        paragraph:
          "Comprehensive services to manage and maintain your servers.",
      },
      {
        id: 7,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-square-terminal"
          >
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          </svg>
        ),
        title: "Operating System Deployment",
        paragraph:
          "Services to deploy and manage operating systems for your business needs.",
      },
      {
        id: 8,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-waypoints"
          >
            <circle cx="12" cy="4.5" r="2.5" />
            <path d="m10.2 6.3-3.9 3.9" />
            <circle cx="4.5" cy="12" r="2.5" />
            <path d="M7 12h10" />
            <circle cx="19.5" cy="12" r="2.5" />
            <path d="m13.8 17.7 3.9-3.9" />
            <circle cx="12" cy="19.5" r="2.5" />
          </svg>
        ),
        title: "Industry Leading Software",
        paragraph:
          "Top-tier software solutions to meet your business requirements.",
      },
      {
        id: 9,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-folder-sync"
          >
            <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
            <path d="M12 10v4h4" />
            <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
            <path d="M22 22v-4h-4" />
            <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
          </svg>
        ),
        title: "Backup Solutions",
        paragraph:
          "Reliable backup solutions to protect your data from loss or corruption.",
      },
      {
        id: 10,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-app-window-mac"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="M6 8h.01" />
            <path d="M10 8h.01" />
            <path d="M14 8h.01" />
          </svg>
        ),
        title: "Windows OS (End User/Server)",
        paragraph:
          "Deployment and management of Windows operating systems for end-users and servers.",
      },
      {
        id: 11,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-square-chevron-right"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m10 8 4 4-4 4" />
          </svg>
        ),
        title: "Linux OS (End User/Server)",
        paragraph:
          "Linux operating system solutions for end-users and server environments.",
      },
      {
        id: 12,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-computer"
          >
            <rect width="14" height="8" x="5" y="2" rx="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <path d="M6 18h2" />
            <path d="M12 18h6" />
          </svg>
        ),
        title: "Virtualization Solutions",
        paragraph:
          "Virtualization services to enhance the efficiency and scalability of your IT infrastructure.",
      },
    ],
  },
];
export default servicesData;
