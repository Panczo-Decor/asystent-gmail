import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Kliknij, aby wygenerować ofertę');

  const handleClick = () => {
    setMessage('Oferta: Firana Capri 250x160, Ilość: 4 sztuki, Cena: 139,96 zł');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Asystent Gmail</h1>
      <p>{message}</p>
      <button onClick={handleClick}>Wygeneruj ofertę</button>
    </div>
  );
}

export default App;
