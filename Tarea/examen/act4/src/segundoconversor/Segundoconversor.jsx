import { useState } from 'react'
import './Segundoconversor.css'

function App() {
  const [euros, setEuros] = useState(0);

  function convertir(e) {
    e.preventDefault();
    let euros = e.target.euros.value;
    setEuros(euros);
  }

  return (
    <div className="App">
        <h1>Convertir euros a dólares</h1>
        <form onSubmit={convertir}>
            {euros} euros
            <button className='sumar' onClick={() => setEuros(euros + 1)}>+</button>
            <button className='restar' onClick={() => setEuros(euros - 1)}>-</button>
          </form>
          <b>{euros * 1.21} dólares</b>
    </div>
  )
}

export default App