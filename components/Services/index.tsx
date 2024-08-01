import SectionTitle from "../Common/SectionTitle";
import { HoverEffect } from "../ui/card-hover-effect";
import featuresData from "./servicesData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="We deliver IT solutions, including managed services, cloud, security, and networking, for businesses, governments, and individuals."
            center
          />

          <HoverEffect items={featuresData} />
        </div>
      </section>
    </>
  );
};

export default Features;
