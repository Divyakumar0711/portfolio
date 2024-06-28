"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { projects, navItems } from "@/data";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function AllProjects() {
  const router = useRouter();

  return (
    <AuroraBackground className="w-full h-full">
      <IoArrowBack
        className="fixed lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] left-4 top-4 z-50 "
        cursor={"pointer"}
        color="white"
        onClick={() => router.back()}
      />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-4 py-8"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-8">
            {projects.map((item) => (
              <CardContainer key={item.id} className="inter-var mb-8">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.des}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.img}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                    <a href={item.link}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        View Project
                      </CardItem>
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
