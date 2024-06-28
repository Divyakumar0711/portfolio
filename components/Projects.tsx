"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/data";
import { PinContainer } from "./ui/3D-pin";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-yellow">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <AnimatePresence>
          {projects.slice(0, 2).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title="View" href={item.link}>
                <a href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>
                </a>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
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

                  <div className="flex justify-center items-center">
                    <a
                      href={item.link}
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      View Project
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                  {/* <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div> */}
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {projects.length > 2 && (
        <Link href="allprojects" passHref>
          <div className="flex justify-center mt-10">
            {/* <MagicButton
            title={showAll ? "Show Less" : "Show More"}
            icon={
              showAll ? (
                <MdExpandLess className="w-[30px] h-[30px]" />
              ) : (
                <MdExpandMore className="w-[30px] h-[30px]" />
              )
            }
            position="left"
            handleClick={handleToggle}
            otherClasses="!bg-[#161A31] "
          /> */}
            <MagicButton
              title="View all Projects"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => {}}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default RecentProjects;
