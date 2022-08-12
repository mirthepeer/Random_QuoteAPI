import React, { useEffect, useState } from 'react'
import './QuotCard.css'

function QuotCard() {
  
  const [quote, setquote] = useState({
    content:"" ,
    author:""
  })  
  const [button, setbutton] = useState(false)

  function refresh(){
    setbutton(prevState => !prevState)
  }

  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data =>  {
        let current = {content : data.content , author : data.author }
        setquote(current)
    })
    
    // .then (data => { setquote({ content:data.content,author:data.author})
        
        
        
    

   console.log("this is result"+quote.author,quote.content)

  }, [button])

  
  return (
    
    <div className='card'>
        <div className='card-container'>
        <div className='card-title'><h1>{quote.author}</h1></div>
        <div className='card-body'><p>{quote.content}</p></div>
        <div className='button'>
            <button className='' onClick={refresh}>New quote</button>
            </div>
        
        </div>
       
    </div>
  )
}

export default QuotCard

