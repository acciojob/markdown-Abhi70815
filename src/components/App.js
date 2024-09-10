import React, { createContext, useState } from 'react'
import MarkdownApp from './MarkdownApp'
import Preview from './Preview';
import '../styles/App.css'


export const DataContext = createContext();

const App = () => {
 const [markedText , setMarkedText]= useState('');
  return (
    <DataContext.Provider value={{markedText, setMarkedText}}>

    <div className='app'>
      <MarkdownApp/>
      <Preview />
    </div>
    </DataContext.Provider>
  )
}

export default App
