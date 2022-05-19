import React, {useState} from 'react'

 const Ejemplo1 = () => {
  const [count, setCounter] = useState(0)

  const handleCounter = (num) =>() => setCounter(count + num)

  return (<div id="container">
    <p>{count}</p>
    <button onClick={handleCounter(1)}>Sumar</button>
    <button onClick={handleCounter(-1)}>Restar</button>
  </div>)
}

export default Ejemplo1