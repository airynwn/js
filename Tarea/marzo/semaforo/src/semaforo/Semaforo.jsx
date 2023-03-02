import { useState, useEffect } from 'react'
import Luz from './Luz'

function App() {
    // Rojo: 3s, Amarillo: 2s, Verde: 1s
    const duracionLuz = [3000, 2000, 1000];
    let [color, setColor] = useState(0);
   
    useEffect(() => {
      console.log('Iniciando contador');
      let tiempo = setInterval(() => {
        console.log('Contando')
        setColor((color + 1) % 3) // 0, 1 ó 2 porque cuando llega a 3 se resetea
      }, duracionLuz[color]); // por la duración que esté asignada al color
      return () => clearInterval(tiempo);
    });
  
    return (
        <div className="App">
            <h1>Semáforo</h1>
            <div className="semaforo">
                <Luz color="crimson" encendido={color === 0}/>
                <Luz color="gold" encendido={color === 1}/>
                <Luz color="springgreen" encendido={color === 2}/>
            </div>
        </div>
    )
}
  
export default App