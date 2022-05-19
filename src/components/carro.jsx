import React, {useState} from 'react'

 const Carusel = () => {
  const [paso, setPaso] = useState(0)
  const handlePaso = (num) =>() => setPaso(Math.max(0, Math.min(4, paso + num)))

  return (
    <>
  <div style={{
    width: '400px',
    height: "200px",
    overflow: 'hidden'
  }}>
    <div style={{
      width: "max-content",
      transition:"transform 0.2s ease-in",
      transform: `translateX(calc(-${paso * 200}px - ${paso + 1}px))`
    }}>
      <img src="https://picsum.photos/200" alt="image1"/>
      <img src="https://picsum.photos/201" alt="image1"/>
      <img src="https://picsum.photos/202" alt="image1"/>
      <img src="https://picsum.photos/203" alt="image1"/>
      <img src="https://picsum.photos/204" alt="image1"/>
    </div>
  </div>

  <div>
    <button onClick={handlePaso(-1)}>Atras</button>
    <button onClick={handlePaso(1)}>Siguiente</button>
  </div>
  </>
  )

}

export default Carusel