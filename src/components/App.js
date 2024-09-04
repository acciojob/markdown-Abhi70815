import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';

const App = () => {
    const [markdown, setMarkdown]= useState();
    const [loading, setLoading]= useState(false);
    const handleChange=(e)=>{
        setLoading(true);
        setMarkdown(e.target.value);

    }
    useEffect(()=>{
        if(markdown){
            setLoading(false);
        }
    },[markdown])
  return (
    <div>
        <div className='app'>
<h1>Markdown Preview Application </h1>
<div style={{display:"flex"}}>
 <textarea className='textarea'
    value={markdown}
    onChange={(e)=>setMarkdown(e.target.value)}
    placeholder='write your markdown here...'
    rows="15"
    cols="50"

 >

 </textarea>
 <div className='preview' style={{marginLeft:"20px", border:"1px solid black"}}>
<ReactMarkdown>{markdown}</ReactMarkdown>
 </div>
</div>
        </div>
        {loading && <p className='loadinng'> Loading preview...</p>}
    </div>
  )
}

export default App