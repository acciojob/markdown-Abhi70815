import React from 'react'

const Preview = ({markedText}) => {
  return (
    <div className='preview'>
      <h1>Heading <br/> {markedText}</h1>
    </div>
  )
}

export default Preview