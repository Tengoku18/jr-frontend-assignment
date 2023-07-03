/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import HeaderWithButton from "./HeaderWithButton";

const Gallery = () => {
  const searchedAlbum = useSelector((state) => state.allAlbum.album);

  // console.log("query is sdsdds", storeAlbum);

  const getAlbums = async () => {
    const response = await axios.get(
      "https://spotify23.p.rapidapi.com/albums/",
      {
        params: {
          ids: "1qHht0Qw9uUWMWHnqObZ7g,2lBnYvt0Yf3HORrdVAVLte,7pG7UD4ytFwvZYziuKKasJ,23bqeyhRwGWrVJEJ00KXDP,5l5gR4rh26QI3fijGFTDrp,3IBcauSj5M2A6lTeffJzdv,2eQMC9nJE3f3hCNKlYYHL1,2rb6C1wUwk7hFOVmfgt19k,6T3JpPBkz5CYJlwtXBofkl,5amj9zNeZ3B2EdpBgXrOZ0,1DF9B2hfwX4EdgEFwGcRwh",
        },
        headers: {
          "X-RapidAPI-Key":
            "37149707ebmsh7abd441c54bb7f1p147a1fjsn0aa037309cc2",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      }
    );
    const { data } = response;
    return data.albums;
    // setAlbums(data.albums);
  };

  const {
    data: trendingAlbums,
    error,
    isLoading,
  } = useQuery(["fetchAlbums"], getAlbums, { staleTime: 10000 });

  if (isLoading) {
    return (
      <div className="h-[80vh] flex justify-center items-center ">
        {" "}
        <Spinner />{" "}
      </div>
    );
  }
  if (error) {
    return (
      <h1 className="text-center text-xl ">
        {" "}
        An error has occured {error?.message}{" "}
      </h1>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-3 md:px-5 flex flex-col">
      <HeaderWithButton
        title={
          searchedAlbum.length > 0 ? "Searched Results " : "Trending Albums"
        }
      />
      <div className="  pb-10 mt-3 grid place-content-center grid-cols-auto md:grid-cols-3 gap-4">
        {searchedAlbum.length > 0
          ? searchedAlbum.map((album, i) => {
              const { data } = album;
              const { name, coverArt, uri } = data;

              const id = uri.split(":").pop();

              return (
                <div key={uri}>
                  <Link href={` /details/${id}`}>
                    <Card albumName={name} imagUrl={coverArt.sources[0].url} />
                  </Link>
                </div>
              );
            })
          : trendingAlbums &&
            trendingAlbums.map((album: any, i: any) => {
              const { name, popularity, uri, images, id } = album;

              return (
                <div key={uri}>
                  <Link href={` /details/${id}`}>
                    <Card
                      albumName={name}
                      popularity={popularity}
                      imagUrl={images[1].url}
                    />
                  </Link>
                </div>
              );
            })}
      </div>
    </main>
  );
};

export default Gallery;
