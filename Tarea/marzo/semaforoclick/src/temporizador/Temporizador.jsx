import { useState, useEffect } from 'react'

function App() {
  
  let [segundos, setSegundos] = useState(null);
  let [temporizador, setTemporizador] = useState(0);
 
  useEffect(() => {
    if (segundos === null) return;
    console.log('Iniciando contador');
    setTemporizador(0);
    let tiempo = setInterval(() => {
      console.log('Contando')
      setTemporizador((temporizador) => temporizador + 1)
    }, 1000);
    return () => clearInterval(tiempo);
  }, [segundos])

    function recogerSegundos(e) {
      e.preventDefault();
      setSegundos(e.target.sec.value);
    }

  if (segundos !== null && temporizador >= segundos) {
      return (
        <div className="App">
          <h1>Contador</h1>
          <div className="card fin">
            <p className='reinicio'>¡Se acabó!</p>
            <button onClick={()=>setSegundos(null)}>Reiniciar</button>
          </div>
        </div>
      )
  } else if (segundos !== null) {
    return (
      <div className="App">
        <h1>Contador</h1>
        <div className="card">
          <p>Soy un conteo hasta el {segundos} y han transcurrido {temporizador} segundos</p>
          <div className="contador">
            {segundos-temporizador} / {segundos}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <h1>Contador</h1>
        <div className="card">
          <p>¿Cuántos segundos vamos a contar?</p>
          <form onSubmit={recogerSegundos}>
            <input type="text" name="sec" required pattern='\d+' />
            <br />
            <button>Iniciar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App