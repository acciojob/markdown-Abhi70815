import React from 'react'

const MarkdownApp = ({setMarkedText})=> {
 
  return (
    <textarea rows={24} cols={50} onChange={(e)=>setMarkedText(e.target.value)} className='textarea'></textarea>
  )
}

export default MarkdownApp