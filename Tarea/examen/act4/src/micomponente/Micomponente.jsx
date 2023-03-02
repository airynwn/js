import { useState } from 'react'
import './Micomponente.css'

function App() {
  const [dolares, setDolares] = useState(0);
  const [euros, setEuros] = useState(null);

  function convertir(e) {
    e.preventDefault();
    let euros = e.target.euros.value;
    setEuros(euros);
    let dolares = euros * 1.21;
    setDolares(dolares);
  }

  if (euros !== null) {
    return (
      <div className="App">
        <h1>Convertir euros a dólares</h1>
        <b>El importe de {euros} euros son {dolares} dólares</b>
        <form onSubmit={convertir}>
            <input type="numeric" name="euros" required />
            <br />
            <button onClick={()=>setEuros(null)}>Calcular otro nuevo importe</button>
          </form>
    </div>
    )
  }

  return (
    <div className="App">
        <h1>Convertir euros a dólares</h1>
        <form onSubmit={convertir}>
            <input type="numeric" name="euros" required />
            <br />
            <button>Calcular importe</button>
          </form>
        <br />
    </div>
  )
}

export default App