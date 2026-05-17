"use client";

import Tag from '@/components/Tag';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [tags, setTags] = useState([])

  const fetchTags = async () => {
        try {
            const response = await fetch('https://qevent-backend.labs.crio.do/tags');
            const data = await response.json();
            setTags(data);
        } catch (error) {
            console.error('Error fetching tags`:', error);
        }
    };

    useEffect(() => {
      fetchTags()
    }, [])
    


  return (
    <div className='flex flex-wrap justify-center items-center mt-10 gap-3'>   
      {
        tags.map((tag) => (
          <Tag key={tag.id} text={tag.name}  />
        ))
      }
    </div>
  )
}

export default page
