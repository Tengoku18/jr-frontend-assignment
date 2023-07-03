import Image from "next/image";
import React from "react";

type Props = {
  artistName: string;
  releasedDate?: string;
  tracks?: string;
  imageUrl?: any;
  labelName?: string;
  albumName?: string;
};

const AlbumDetails = ({
  artistName,
  releasedDate,
  tracks,
  imageUrl,
  labelName,
  albumName,
}: Props) => {
  return (
    <div className=" max-w-6xl  mx-auto flex flex-col  md:flex-row  py-10  text-white">
      <div className=" w-full  md:w-1/2 flex justify-center">
        <Image
          height={400}
          width={500}
          className="p-4 rounded-t-lg"
          src={imageUrl}
          alt="product image"
        />
      </div>
      <div className=" flex flex-col justify-center pl-28 w-full md:w-1/2">
        <div className="">
          <h2 className=" text-lg font-bold tracking-wider">
            Album Name :{" "}
            <span className="font-medium tracking-normal"> {albumName} </span>
          </h2>
        </div>
        <div>
          <h2 className=" text-lg font-bold tracking-wider">
            Artist Name :{" "}
            <span className="font-medium tracking-normal"> {artistName} </span>
          </h2>
        </div>
        <div>
          <h2 className=" text-lg font-bold tracking-wider">
            Release Date :{" "}
            <span className="font-medium tracking-normal">
              {" "}
              {releasedDate}{" "}
            </span>
          </h2>
        </div>
        <div>
          <h2 className=" text-lg font-bold tracking-wider">
            Tracks :{" "}
            <span className="font-medium tracking-normal"> {tracks} </span>
          </h2>
        </div>
        <div>
          <h2 className=" text-lg font-bold tracking-wider">
            Label :{" "}
            <span className="font-medium tracking-normal"> {labelName}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
