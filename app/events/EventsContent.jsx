"use client";

import React, { useEffect, useState } from 'react'
import EventCard from '@/components/EventCard';
import { useSearchParams } from 'next/navigation';

const EventsContent = () => {

    const [events, setEvents] = useState([])
    const searchParams = useSearchParams()
    const artistQuery = searchParams?.get("artist") || ""
    const tagQuery = searchParams?.get("tag") || ""

    const fetchEvents = async () => {
        try {
            const response = await fetch('https://qevent-backend.labs.crio.do/events');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const filteredEvents = events.filter((event) => {
        const matchesArtist = artistQuery
            ? event.artist?.toLowerCase() === artistQuery.toLowerCase()
            : true;
        const matchesTag = tagQuery
            ? event.tags?.some((tag) => tag.toLowerCase() === tagQuery.toLowerCase())
            : true;
        return matchesArtist && matchesTag;
    });

    useEffect(() => {
        fetchEvents();
    }, [])
    

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((eventData) => (
            <EventCard key={eventData.id} eventData={eventData} />
          ))
        ) : (
          <p className="text-lg text-center w-full mt-10">
            No events found for {tagQuery ? `tag: ${tagQuery}` : artistQuery ? `artist: ${artistQuery}` : 'any event'}.
          </p>
        )}
      </div>
    </div>
  )
}

export default EventsContent
