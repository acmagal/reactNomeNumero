import { useState } from 'react'
import './App.css'

function App() {
  
  const [num, setNum] = useState(1);
  const [nome, setNome] = useState("Andre");

  const changeNum = () => {
    setNum((prevNum) => prevNum + 1);
    setNum((prevNum) => prevNum + 1);
  }

  console.log(nome);
  
  return (
    <>
      <h1>
        Troca Numero e  Nome:
      </h1>
      <body>
      <h2>Meu numero +2 é: {num}</h2>
      <input type='number' value={num}></input>
      <button onClick={changeNum}>Mudar número!</button>
      <h2>Meu nome é: {nome}</h2>
      <input type="text" value={nome} onChange = {e =>setNome(e.target.value)}/>
      </body>
    </>
  )
}

export default App
