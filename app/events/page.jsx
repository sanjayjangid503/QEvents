import React, { Suspense } from 'react'
import EventsContent from './EventsContent';

const page = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading events...</div>}>
      <EventsContent />
    </Suspense>
  )
}

export default page
