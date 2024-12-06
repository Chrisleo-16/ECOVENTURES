/** @format **/
"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Our Services",
    link: "#",
    children: [
      {
        label: "Our Approach",
        link: "#",
      },
      {
        label: "Our Impact",
        link: "#",
      },
      {
        label: "The Community",
        link: "/our-community",
      },
    ],
  },
  {
    label: "Our Blog",
    link: "/blog",
  },
  {
    label: "Contact our Team",
    link: "/contact",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="flexBetween max-container padding-container sticky z-30 py-5 ">
      {/* left side */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Link href="/">
          <Image
            src="/logo-no-background1.svg"
            alt="logo"
            width={250}
            height={400}
          />
        </Link>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-3 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative  group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 text-sm text-neutral-400 group-hover:text-green-50 hover:ease-in hover:duration-1000 ease-out duration-700">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>
              {/** dropdown */}
              {d.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg  py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" relative flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-green-50 after:content-none after:w-[0] after:h-[3px] after:bg-[#ff004f] after:absolute after:left-[0] after:-bottom-[-6px] after:duration-1000 hover:after:w-[100%]  "
                    >
                      {/*item */}
                      <span className="whitespace-nowrap pl-3">{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>
      {/*right side Data */}
      <section className="hidden md:flex items-center gap-8">
        <SignedOut>
          <Link href="/sign-up">
            <Button
              type="button"
              title="Sign Up"
              variant="btn_dark_green_outline"
            />
          </Link>
          <Link href="/sign-in">
            <Button
              type="button"
              title="Log In"
              icon="/user.svg"
              variant="btn_dark_green_outline"
            />
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </section>
      <ThemeSwitcher />
      <FiMenu
        className="bold-58 text-3xl m:hidden lg:hidden cursor-pointer"
        onClick={openSideMenu}
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;
  return (
    <div className="fixed right-0 top-0 flex h-full min-h-screen w-full bg-neutral-100 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4  ease-in duration-1000">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl ease-out duration-1000"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>
        <section className="flex flex-col gap-8 mt-4 items-center ">
          <SignedOut>
            <div onClick={closeSideMenu}>
              <Link href="/sign-up">
                <Button
                  type="button"
                  title="Sign Up"
                  variant="btn_dark_green_outline"
                />
              </Link>
            </div>
            <div onClick={closeSideMenu}>
              <Link href="/sign-in">
                <Button
                  type="button"
                  title="Log In"
                  icon="/user.svg"
                  variant="btn_dark_green_outline"
                />
              </Link>
            </div>
          </SignedOut>

          <SignedIn>
            <div className=" gap-8 mt-4 items-center ">
              <UserButton />
            </div>
          </SignedIn>
        </section>
      </div>
    </div>
  );
}
function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all ease-in duration-700  "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 hover:text-green-50 hover:ease-in hover:duration-1000 ease-out duration-700">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-green-50  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
