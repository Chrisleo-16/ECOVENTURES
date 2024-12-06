import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";

function Footer() {
  return (
    <footer className=" padding-container max-container py-12  px-24">
      <div className=" flex md:flex-row w-full flex-col justify-evenly mt-6">
        <div className="p-5">
        <Link href="/">
          <Image
            src="/logo-no-background1.svg"
            alt="logo"
            width={250}
            height={400}
          />
        </Link>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-green-500 text-2xl font-bold">
              Stay Connected
            </p>

            <div className="flex gap-6 pb-5">
              {/** Section for icons */}
              <BsFacebook className="text-2xl text-blue-600 cursor-pointer hover:text-green-50 hover:duration-100" />
              <BsTwitterX className="text-2xl text-black cursor-pointer hover:text-green-50 hover:duration-100" />
              <BsMessenger className="text-2xl text-purple-950 cursor-pointer hover:text-green-50 hover:duration-100" />
              <BsTiktok className="text-2xl text-black cursor-pointer hover:text-green-50 hover:duration-100" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-yellow-500 text-2xl font-bold">
              About EcoVent
            </p>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-green-500 hover:duration-1000">
              <a href="/" className="list-disc">
                Home
              </a>
            </li>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-yellow-500 hover:duration-1000">
              <a href="/about" className="list-none">
                About us
              </a>
            </li>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-green-500 hover:duration-1000">
              <a href="/contact" className="list-none">
                Contact Us
              </a>
            </li>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-yellow-500 hover:duration-1000">
              <a href="/blog" className="list-none">
                Our Blog
              </a>
            </li>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-green-500 hover:duration-1000">
              <a href="/" className="list-none">
                Our Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-green-500 text-2xl font-bold">Resources</p>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-yellow-500 hover:duration-1000">
              <a href="/" className="list-disc">
                Our Case Studies
              </a>
            </li>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-green-500 hover:duration-1000">
              <a href="/FAQS" className="list-none">
                FAQs
              </a>
            </li>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-yellow-500 hover:duration-1000">
              <a href="/contact" className="list-none">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-yellow-500 text-2xl font-bold">Legal</p>
            <li className="pb-2  text-sm text-gray-50 font-medium hover:text-green-500 hover:duration-1000">
              <a href="/" className="list-disc">
                Privacy & Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="py-6 px-12" />
      <div className="items-center justify-center text-center pb-12">
        {" "}
        &copy;2024|ECOVENT
      </div>
    </footer>
  );
}

export default Footer;
