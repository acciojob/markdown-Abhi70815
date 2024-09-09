import React, { useState } from 'react'
import MarkdownApp from './MarkdownApp'
import Preview from './Preview';
import '../styles/App.css'


const App = () => {
  const [markedText, setMarkedText] = useState("");
  return (
    <div className='app'>
      <MarkdownApp setMarkedText={setMarkedText}/>
      <Preview markedText={markedText}/>
    </div>
  )
}

export default App
