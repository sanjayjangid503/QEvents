"use client";

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {

  const params = useParams()
  const eventId  = params.eventId
  const [events, setEvents] = useState({})


   const fetchEvents = async () => {
        try {
            const response = await fetch(`https://qevent-backend.labs.crio.do/events/${eventId}`);
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [])
    
  
  
  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      <div className="max-w-6xl mx-auto px-8 py-10">

        {/* Top Image */}
        <div className="flex justify-center">
          <img
            src={events.image}
            alt="Event"
            className="w-[500px] h-[260px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="mt-10 flex flex-col lg:flex-row gap-16">

          {/* Left Side */}
          <div className="flex-1">

            {/* Title */}
            <h1 className="text-5xl font-bold text-[#c89b5b]">
              {events.name}
            </h1>

            {/* Location */}
            <p className="text-[#c89b5b] font-semibold mt-2">
              {events.location}
            </p>

            {/* Organizer */}
            <p className="text-[#c89b5b] font-semibold">
              {events.artist}
            </p>

            {/* Tags */}
          
            <div className="flex gap-3 mt-10 flex-wrap">
            {
              events?.tags?.map((tag, index) => (
                <span className="bg-[#d9a066] text-white text-sm px-4 py-1 rounded-full font-medium">
                #{tag}
              </span>
              ))
            }    
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-8 mt-8 text-[17px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="bg-blue-200 px-1 mx-1">
                Autem
              </span>
              cumque placeat architecto dolorem inventore ex eius
              recusandae quod perspiciatis voluptatum maxime porro
              soluta repellat tempore accusamus. Incidunt, iure
              laborum? Modi odio possimus dicta sapiente neque
              tempora corporis recusandae nostrum et, ipsam omnis
              laudantium sequi, hic dolore pariatur ad commodi autem.
            </p>

            {/* Bottom Section */}
            <div className="flex items-center justify-between mt-12 flex-wrap gap-5">

              {/* Price */}
              <h2 className="text-5xl font-bold text-[#8e9a64]">
                ${events.price}
              </h2>

              {/* Button */}
              <button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-7 py-3 rounded-md font-semibold transition">
                Buy Tickets
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default page
