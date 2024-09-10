import React, { useContext } from 'react'
import { DataContext } from './App'
const Preview = () => {
const data= useContext(DataContext);
  return (
    <div className='preview'>
      <h1 id='Heading'>{data.markedText}</h1>
    </div>
  )
}

export default Preview