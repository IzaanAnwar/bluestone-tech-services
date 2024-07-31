"use client";
import { useRef } from "react";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

const Brands = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-light p-2 shadow-md hover:bg-gray-300 focus:outline-none"
              >
                <MoveLeftIcon />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-light p-2 shadow-md hover:bg-gray-300 focus:outline-none"
              >
                <MoveRightIcon />
              </button>
              <div
                ref={scrollContainerRef}
                className="wow fadeInUp scrollbar-hide flex flex-wrap items-center justify-center overflow-x-auto scroll-smooth rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
                data-wow-delay=".1s"
              >
                <div className="flex h-full w-full items-center justify-center">
                  {brandsData.map((brand) => (
                    <SingleBrand key={brand.id} brand={brand} />
                  ))}
                </div>
                {/* Coming Soon */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
