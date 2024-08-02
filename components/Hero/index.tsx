"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Hero = () => {
  return (
    // <section
    //   id="home"
    //   className="relative z-10 bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    //   style={{
    //     backgroundImage: "url('/images/hero/backdrop.jpg')",
    //     backgroundSize: "cover",

    //     backgroundPosition: "center",
    //     backgroundAttachment: "fixed",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh", // Full viewport height
    //   }}
    // >
    //   <div className="absolute inset-0 bg-black opacity-85"></div>
    //   <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
    //     <div
    //       className="wow fadeInUp mx-auto max-w-[800px] text-center"
    //       data-wow-delay=".2s"
    //     >
    //       <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
    //
    //       </h1>
    //       <p className="mb-12 text-base !leading-relaxed text-zinc-200 sm:text-lg md:text-xl">
    //       </p>
    //       <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
    //         <Link
    //           href="/contact"
    //           className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 dark:text-white"
    //         >
    //           Book A Meeting
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-6 px-4"
      >
        <div className="text-center  dark:text-white ">
          <h1 className="mx-auto mb-5 text-3xl font-bold leading-tight  sm:text-4xl sm:leading-tight md:max-w-[75%] md:text-5xl md:leading-tight lg:max-w-[60%]">
            Transforming Complex Challenges into Seamless Solutions
          </h1>
          <div className=" pb-8 text-base font-extralight dark:text-neutral-200 md:text-4xl">
            Bluestone Tech Services Pvt Ltd.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="div"
            className="inline-flex animate-shimmer items-center justify-center rounded-md border  bg-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[length:200%_100%] px-6 py-2 font-medium text-white transition-colors focus:outline-none    dark:border-slate-800"
          >
            <Link href="/contact" className="h-full w-full">
              Book A Meeting
            </Link>
          </HoverBorderGradient>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
