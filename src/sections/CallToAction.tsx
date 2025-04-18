"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { useRef } from "react";

export const CallToAction = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={scrollRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className={"container"}>
        <div className={"section-heading relative"}>
          <h2 className={"section-title"}>Sign up for free today</h2>
          <p className={"section-description mt-5"}>
            Transform your business with our powerful SaaS solution. Optimize,
            automate, and achieve your goals. Get started now and experience
            unparalleled growth and efficiency!
          </p>
          <motion.img
            src={starImage.src}
            alt={"star"}
            width={360}
            className={"absolute -left-[350px] -top-[137px]"}
            style={{ translateY: translateY }}
          />
          <motion.img
            src={springImage.src}
            alt={"spring"}
            width={360}
            className={"absolute -right-[331px] -top-[19px]"}
            style={{ translateY: translateY }}
          />
        </div>
        <div className={"flex gap-2 mt-10 justify-center"}>
          <button className={"btn btn-primary"}>Get for free</button>
          <button className={"btn btn-text gap-1"}>
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
