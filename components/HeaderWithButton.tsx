import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {
  title: string;
  button?: boolean;
};

const HeaderWithButton = ({ title, button }: Props) => {
  return (
    <div className="flex px-3 md:px-5  max-w-6xl mx-auto items-center  text-white py-3">
      {button && (
        <Link href="/">
          <div className="mr-2 cursor-pointer">
            {" "}
            <ArrowLeftIcon className="h-6 w-6 " />{" "}
          </div>
        </Link>
      )}
      <h1 className="text-3xl font-semibold ">{title}</h1>
    </div>
  );
};

export default HeaderWithButton;
