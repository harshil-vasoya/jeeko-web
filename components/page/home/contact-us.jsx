"use client";

import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        "h2",
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "h2",
            start: "top 90%",
            end: "200px 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 2,
        }
      );

      gsap.fromTo(
        ".contact-card",
        {
          y: 100,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none reverse",
            // scrub: 1,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        }
      );

      gsap.fromTo(
        ".contact-form",
        {
          y: 100,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 90%",
            end: "bottom 90%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          duration: 1.5,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-primary w-full py-10">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-white">Get in touch</h2>
          <h3 className="text-white text-xl"> We're Here to Help</h3>
          <p className="text-white text-sm mt-2">
            If you have any questions, concerns, or feedback, we're here to
            assist you. Our team is dedicated to providing support and ensuring
            your experience is smooth and hassle-free. Don't hesitate to reach
            out to us—we'd love to hear from you!
          </p>
          <div className="bg-[#EAEAEA] rounded-xl p-7 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col md:flex-row items-start gap-3 w-full md:items-center bg-white p-4 rounded-xl contact-card">
              <div className="bg-primary rounded-xl p-3">
                <IoCall className="size-5 text-white" />
              </div>
              <div>
                <div className="text-2xl ps-font-orbitron font-bold">
                  Call Us
                </div>
                <div className="text-sm sm:text-base">+91 9156261648</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-3 w-full md:items-center bg-white p-4 rounded-xl contact-card">
              <div className="bg-primary rounded-xl p-3 ">
                <FaRegClock className="size-5 text-white" />
              </div>
              <div>
                <div className="text-2xl ps-font-orbitron font-bold">
                  Operasional
                </div>
                <div className="text-sm sm:text-base">09:00 AM - 05:00 PM</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-3 w-full md:items-center bg-white p-4 rounded-xl contact-card">
              <div className="bg-primary rounded-xl p-3 ">
                <IoMdMail className="size-5 text-white" />
              </div>
              <div>
                <div className="text-2xl ps-font-orbitron font-bold">Email</div>
                <div className="text-sm sm:text-base">marketing@jeeko.com</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-3 w-full md:items-center bg-white p-4 rounded-xl contact-card">
              <div className="bg-primary rounded-xl p-3 ">
                <FaLocationDot className="size-5 text-white" />
              </div>
              <div>
                <div className="text-2xl ps-font-orbitron font-bold">
                  Location
                </div>
                <div className="text-sm sm:text-base">
                  GAT No. 2022/5, Ambethan Bordara Road, Chakan Road, Chakan,
                  Pune, Maharashtra, 410501
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-xl p-7 contact-form">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <Input
                  type="tel"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
