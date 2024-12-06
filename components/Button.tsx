import Image from "next/image";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";


type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={` flexCenter gap-5 rounded-full border-2 border-neutral-400  ${variant} ${full && "w-full"}  hover:text-gray-500 hover:border-gray-500 hover:ease-in hover:duration-1000 ease-in-out duration-1000`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={14} height={14} /> && <IoPersonOutline className="transition-all group-hover:transition-all "/>}
      <label className="bold-10 whitespace-nowrap cursor-pointer">
        {title}
      </label>{" "}
    </button>
  );
};

export default Button;
