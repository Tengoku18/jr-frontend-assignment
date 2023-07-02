"use client"
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

 
   useEffect(() => { 
   
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/albums/',
      params: {
        ids: '3IBcauSj5M2A6lTeffJzdv'
      },
      headers: {
        'X-RapidAPI-Key': '37149707ebmsh7abd441c54bb7f1p147a1fjsn0aa037309cc2',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
      
    

    try {
      const response = axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
   },[])

  return (
    <div  className="" >

   <Navbar />
   <Gallery />
      {/* <div>
         Search bar lorem200
      </div>
      <div> 
        Cards
      </div> */}
     {/* <h1>Music Sansar</h1>
      <p>Sansar for music lovers</p> */}

      <div>  
        
      </div>
    </div>
  );
}
