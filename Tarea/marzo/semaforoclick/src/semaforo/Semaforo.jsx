import { useState } from 'react'

function App() {
  let [color, setColor] = useState(null);

  return (
      <div className="App">
          <h1>Semáforo</h1>
          <div className="semaforo">
              <div className={`circulo ${color === "rojo" ? "rojo" : "rojo apagado"}`}
              onClick={() => setColor("rojo")}></div>
              <div className={`circulo ${color === "amarillo" ? "amarillo" : "amarillo apagado"}`}
              onClick={() => setColor("amarillo")}></div>
              <div className={`circulo ${color === "verde" ? "verde" : "verde apagado"}`}
              onClick={() => setColor("verde")}></div>
          </div>
      </div>
  )
}
  
export default App