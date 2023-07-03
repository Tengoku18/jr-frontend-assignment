"use client";
import AlbumDetails from "@/components/AlbumDetails";
import HeaderWithButton from "@/components/HeaderWithButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner";
const Page = ({ params }: any) => {
  const getAlbumDetail = async () => {
    const response = await axios.get(
      "https://spotify23.p.rapidapi.com/albums/",
      {
        params: {
          ids: params.id,
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
  };

  const {
    data: album,
    isLoading,
    error,
  } = useQuery(["albumDetails"], getAlbumDetail);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        {" "}
        <Spinner />{" "}
      </div>
    );
  }
  if (error) {
    return (
      <h1 className="text-center text-xl ">
        {/* @ts-ignore */}
        An error has occured {error?.message}{" "}
      </h1>
    );
  }

  return (
    <div className="min-h-screen">
      <HeaderWithButton title="Album Details" button />

      {album &&
        album.map((currAlbum: any, i: any) => {
          const {
            name,
            label,
            release_date,
            total_tracks,
            artists,
            uri,
            images,
          } = currAlbum;

          return (
            <AlbumDetails
              imageUrl={images[1].url}
              albumName={name}
              labelName={label}
              artistName={artists[0].name}
              tracks={total_tracks}
              releasedDate={release_date}
              key={uri}
            />
          );
        })}
    </div>
  );
};

export default Page;
