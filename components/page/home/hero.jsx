"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import "./style/hero.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Users } from "lucide-react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const banner = [
  {
    image: "/images/banners/banner-1-sm.webp",
    image_md: "/images/banners/banner-1.webp",
  },
  {
    image: "/images/banners/banner-2-sm.webp",
    image_md: "/images/banners/banner-2.webp",
  },
  {
    image: "/images/banners/banner-3-sm.webp",
    image_md: "/images/banners/banner-3.webp",
  },
];

export default function Hero() {
  const containerRef = useRef();
  const customerCountRef = useRef();
  const yearsRef = useRef();

  useGSAP(
    () => {
      gsap.from(
        ".info-container, .jeeko-logo, .kk-logo, .category-container, .approvals, .customer-count, .years-of-experience",
        {
          opacity: 0,
          y: 100,
          duration: 0.7,
          stagger: 0.2,
        }
      );

      // Counter animation for customer count
      gsap.to(customerCountRef.current, {
        duration: 2,
        delay: 0.5,
        textContent: "100+",
        snap: { textContent: 1 },
        ease: "power1.inOut",
        onUpdate: function () {
          const value = Math.ceil(parseFloat(this.targets()[0].textContent));
          this.targets()[0].textContent = value + "+";
        },
      });

      // Counter animation for years of experience
      gsap.to(yearsRef.current, {
        duration: 2,
        delay: 0.5,
        textContent: "3+",
        snap: { textContent: 1 },
        ease: "power1.inOut",
        onUpdate: function () {
          const value = Math.ceil(parseFloat(this.targets()[0].textContent));
          this.targets()[0].textContent = value + "+";
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section className="app-container mx-auto">
        <div className="w-full h-full rounded-xl">
          <Carousel
            className="w-full h-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {banner.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="flex rounded-xl flex-col w-full h-full justify-between items-center"
                >
                  <div className="bg-white rounded-xl w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.image}
                      width={1980}
                      height={709}
                      className="w-full rounded-xl object-contain block sm:max-h-[85vh] sm:object-cover sm:object-bottom md:hidden"
                    />
                    <Image
                      src={category.image_md}
                      alt={category.image_md}
                      width={1980}
                      height={709}
                      className="w-full rounded-xl object-contain hidden md:block"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute h-12 w-12 left-4 border-red-600 text-red-600 hover:bg-red-600/20 hover:text-red-600" />
            <CarouselNext className="absolute h-12 w-12 right-4 border-red-600 text-red-600 hover:bg-red-600/20 hover:text-red-600" />
          </Carousel>
        </div>
      </section>
      <section className="app-container grid grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto my-4">
        <div className="flex col-span-2 py-7 items-center justify-around bg-white rounded-xl">
          <Image
            src="/images/isi-logo.png"
            alt="iso"
            width={200}
            height={200}
            className=" size-20 object-contain"
          />
          <Image
            src="/images/iso-logo.png"
            alt="iso"
            width={200}
            height={200}
            className=" size-20 object-contain"
          />
          <Image
            src="/images/fmtti-logo.png"
            alt="iso"
            width={200}
            height={200}
            className=" size-20 object-contain"
          />
        </div>
        <div className="col-span-1 flex flex-col py-7 gap-5 items-center justify-center bg-white rounded-xl">
          <h2
            ref={customerCountRef}
            className="text-primary font-bold text-4xl"
          >
            0+
          </h2>
          <div className="font-bold flex items-center gap-2">
            <Users className="size-5" />
            <p className="text-sm md:text-base">Happy Customers</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col py-7 gap-5 items-center justify-center bg-white rounded-xl years-of-experience">
          <h2 ref={yearsRef} className="text-primary font-bold text-4xl">
            0+
          </h2>
          <div className="font-bold flex items-center gap-2">
            <p className="text-sm md:text-base">Years of Experience</p>
          </div>
        </div>
      </section>
    </>
  );
}
