import React from 'react'
import Note from './Note'
export default function AllNote() {

       const list = [
        { title: 'title 1', content: 'content 1' },
        { title: 'title 2', content: 'content 2' },
        { title: 'title 3', content: 'content 3' },
        { title: 'title 4', content: 'content 4' },
        { title: 'title 5', content: 'content 5' },
        { title: 'title 6', content: 'content 6' },
    ]
    const items= list.map((e,index)=><Note key={index} title={e.title} content={e.content}/>)

  return (
   <div className='d-flex justify-content-center gap-3 flex-wrap'>
     {items}

   </div>
  )
}
