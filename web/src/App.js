import React, { useState } from 'react';
// Componente - Função que retorna um html (css ou até mesmo um js de interface). Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação 
// Estado - 
// Propriedade - Informações que um componente PAI passa para o componente FILHO

function App() {

  let counter = 0;

  function incrementCounter(){
    counter ++;
  }

  return (
  <>
<h1>Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
  </>
  );
}

export default App;
