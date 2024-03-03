"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  otherClasses?: string;
  placeholder: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  otherClasses,
  placeholder,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search-icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        value=""
        type="text"
        placeholder={placeholder}
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search-icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
