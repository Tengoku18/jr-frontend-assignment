/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  BeakerIcon,
  MusicalNoteIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {
  imagUrl: string;
  albumName?: string;
  releaseDate?: any;
  popularity?: string;
};

const Card = ({ imagUrl, albumName, releaseDate, popularity }: Props) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        height={300}
        width={400}
        className="p-4 rounded-t-lg"
        src={imagUrl}
        alt="product image"
      />

      <div className="px-5 pb-5 w-full max-w-sm">
        <div className="flex justify-between">
          <div className="flex">
            <MusicalNoteIcon className="h-6 w-6 mr-2  text-gray-600 " />{" "}
            <h3 className="text-md font-bold line-clamp-1 w-40 ">
              {" "}
              {albumName}{" "}
            </h3>
          </div>
          {popularity && (
            <div className="flex">
              <FireIcon className="h-6 w-6 mr-2  text-gray-600 " />{" "}
              <h3 className="text-md font-bold"> {popularity} </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
