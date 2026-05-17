"use client";

import ArtistCard from "@/components/ArtistCard";
import { useEffect, useState } from "react";

const page = () => {
   const [artists, setArtists] = useState([])
  
      const fetchArtists = async () => {
          try {
              const response = await fetch('https://qevent-backend.labs.crio.do/artists');
              const data = await response.json();
              setArtists(data);
          } catch (error) {
              console.error('Error fetching artists:', error);
          }
      };
  
      useEffect(() => {
          fetchArtists();
      }, [])

  return (
    <div>
      <div className='flex flex-wrap'>
     {
        artists.map((artistData, index) => (
            <ArtistCard key={index} artistData={artistData} />
          ))
     }
    </div>
    </div>
  )
}

export default page
