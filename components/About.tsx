import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "./Button";

const About = () => {
  return (
    <section className="  dark:text-gray-100 mt-48">
      <div className="container max-w-xl mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div className="mt-12 mb-24 flex-row z-20 gap-8 sm:items-center md:z-10 ">
          <Button
            variant="btn_dark_green_none"
            title="ABOUT US"
            type="submit"
          />
          <hr
            className="text-2xl text-gray-30 flex-col mt-12 px-12
            "
          />
        </div>
        <h2 className="text-3xl bold-52 lg:bold-88 capitalize tracking-tight text-center sm:text-5xl text-green-500 mt-12">
          How it <span className="text-yellow-500">works ?</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-10 md:w-[98%] mt-6 mb-12">
          <div className="mt-12  shadow-lg rounded-lg shadow-yellow-200 xl:shadow-green-200 overflow-hidden ">
            <div className="relative">
              <h3 className="text-lg capitalize  hover:ease-in hover:duration-1000 ease-out duration-700 text-center bold-32 leading-6 text-green-500">
                rural-industrial convergence
              </h3>

              <p className="relative regular-16  pl-[24px] text-yellow-500 mt-6   text-center">
                Rural industrial convergence in Kenya involves integrating
                various sectors to create sustainable economic opportunities
                <a
                  href="/blog"
                  className="flex gap-8 hover:text-green-500 hover:ease-in hover:duration-1000 ease-out duration-700 mt-12 xl:mt-24 mb-12"
                >
                  {" "}
                  Read More
                  <IoIosArrowForward className="mt-1" />
                </a>
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-lg shadow-yellow-200 xl:shadow-green-200 mt-12  overflow-hidden">
            <div className="relative ">
              <h4 className="text-lg capitalize  justify-center p-5  hover:ease-in hover:duration-1000 ease-out duration-700 text-center bold-32 leading-6 text-yellow-500">
                Land use change and livelihood adaptation
              </h4>
              <p className="relative  regular-16  pl-[24px] text-green-500 mt-6   text-center">
                A holistic approach that combines livelihood diversification,
                sustainable practices, and community engagement is essential for
                building economic resilience in Kenyan agriculture
                <a
                  href="/blog"
                  className="flex gap-8 mt-12 mb-12  hover:text-yellow-500 hover:ease-in hover:duration-1000 ease-out duration-700"
                >
                  Read More
                  <IoIosArrowForward className="mt-1" />
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12  shadow-lg rounded-lg shadow-yellow-200 xl:shadow-green-200 overflow-hidden">
            <div className="relative">
              <h4 className="text-xl capitalize  hover:ease-in hover:duration-1000 ease-out duration-700 text-center bold-32 leading-6 text-green-500">
                Impact of Industrialization on Agriculture
              </h4>
              <p className="relative regular-16  pl-[24px] text-yellow-500 mt-6   text-center">
                The growth of industry and infrastructure can lead to a shortage
                of productive agricultural lands. The idea will be to work on
                solutions that balance industrial growth with the preservation
                of agricultural spaces.
                <a
                  href="/blog"
                  className="flex gap-8 mt-6 mb-12  hover:text-green-500 hover:ease-in hover:duration-1000 ease-out duration-700 "
                >
                  {" "}
                  Read More
                  <IoIosArrowForward className="mt-1 hover:transition" />
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12  shadow-lg rounded-lg shadow-yellow-200 xl:shadow-green-200 overflow-hidden">
            <div className="relative">
              <h4 className="text-xl capitalize  hover:ease-in hover:duration-1000 ease-out duration-700 text-center bold-32 leading-6 text-yellow-500">
                Industrial Ecology
              </h4>
              <p className="relative regular-16  pl-[24px] text-green-500 mt-6   text-center">
                Promoting policies that support sustainable industrial ecology
                and ensuring that manufacturing and service industries grow
                without adversely affecting agricultural productivity is what it
                aims to accomplish.
                <a
                  href="/blog"
                  className="flex gap-8 mt-12 mb-12 hover:text-yellow-500 hover:ease-in hover:duration-1000 ease-out duration-700 "
                >
                  {" "}
                  Read More
                  <IoIosArrowForward className="mt-1 hover:transition" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="mt-10 lg:mt-0"></div>
        <hr />
      </div>
    </section>
  );
};

export default About;
