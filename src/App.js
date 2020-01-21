import React, {useState} from 'react';

function App() {

  const [texto, setTexto] = useState('')

  return (
    <div className="App">
      <h1>{texto}</h1>
      <input onChange={(e) => setTexto(e.target.value)}/>
    </div>
  );
}

export default App;
