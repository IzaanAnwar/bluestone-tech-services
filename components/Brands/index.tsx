import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Brands = () => {
  return (
    <section className="max-w-screen overflow-hidden">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div
            // className="wow fadeInUp flex max-w-full flex-wrap items-center justify-center overflow-hidden rounded-sm bg-gray-light/10 px-8 py-8 dark:bg-gray-dark/10 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
            className="wow fadeInUp flex max-w-full flex-wrap items-center justify-center overflow-hidden rounded-sm bg-gray-light/10 px-8 py-2 dark:bg-gray-dark/10 "
            data-wow-delay=".1s"
          >
            {/* <InfiniteMovingCards
              items={brandsData}
              direction="right"
              speed="normal"
            /> */}
            <div className="w-full rounded-xl   p-4 text-center">
              Our Partners Coming Soon
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
