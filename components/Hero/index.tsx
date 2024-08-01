import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      style={{
        backgroundImage: "url('/images/hero/backdrop.jpg')",
        backgroundSize: "cover",

        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Full viewport height
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center"
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Transforming Businesses through End-to-End IT Solutions
          </h1>
          <p className="mb-12 text-base !leading-relaxed text-zinc-200 sm:text-lg md:text-xl">
            Bluestone Tech Services Pvt Ltd.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 dark:text-white"
            >
              Book A Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
