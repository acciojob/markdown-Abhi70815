import React, { useContext } from 'react'
import {DataContext} from './App'
const MarkdownApp = ()=> {
 const data= useContext(DataContext)
 console.log(data)
  return (
    <textarea rows={24} cols={50}  className='textarea' onChange={(e)=>data.setMarkedText(e.target.value)}></textarea>
  )
}

export default MarkdownApp