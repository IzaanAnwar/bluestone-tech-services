import Breadcrumb from "@/components/Common/Breadcrumb";
import servicesData from "@/components/Services/servicesData";
import SingleService, {
  ExpandableCardDemo,
} from "@/components/Services/SingleService";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services of Bluestone Tech Services Pvt Ltd.",
  description:
    "Bluestone Tech Services Pvt Ltd. is a leading IT services provider who offers a wide range of IT solutions.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services we offer"
        description="We at Bluestone Tech Services Pvt Ltd. offer a wide range of IT solutions including managed services, cloud, security, networking and software solutions."
      />
      <div className="container">
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3 lg:py-28"> */}
        {/* {servicesData.map((service) => (
            <SingleService key={service.id} service={service} />
          ))} */}
        <ExpandableCardDemo />
        {/* </div> */}
      </div>
    </>
  );
};

export default AboutPage;
