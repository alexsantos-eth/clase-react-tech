import React, {useState, useEffect} from 'react'

 const API = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState({})

  const handleText = (ev) => setText(ev.target.value)

  useEffect(() => {
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=yYNe0J7Ch3qptjuvJKtO0FACjoN103Rj&q=${text}&limit=1&offset=0&rating=g&lang=en`, {
        method: "GET"
      }).then((req) => req.json()).then(setData)
  },[text])

  return (
  <div id="container">
    <img src={data?.data?.[0]?.images?.downsized?.url ?? ""} alt={text}/>
      <input placeholder='buscar' value={text}  onChange={handleText}/>
  </div>)
}

export default API