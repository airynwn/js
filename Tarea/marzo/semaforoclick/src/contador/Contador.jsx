import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
        <h1>Cookie Clicker</h1>
        {/* Actualizar el estado del componente mediante la función cuando se clickea el botón */}
        <button type='button' onClick={() => setContador((contador) => contador + 1)}>
            Click aquí
        </button>
        <br />
        <b>Tienes {contador} galletas</b>
    </div>
  )
}

export default App