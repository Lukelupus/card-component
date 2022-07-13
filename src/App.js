import React from 'react';
import Card from './components/Card';
import './App.css';


function App() {
  return (
    <div className="wrapper">
      <Card 
        img="https://repositorio.sbrauble.com/arquivos/in/magic/479834/5fdb8817bc75a-3qyot-npt9a-19578353815fdb8817bc7b2.jpg"
        title="Titulo"
        content="Conteudo"
        price="3,99"
      />
         <Card 
        img="https://repositorio.sbrauble.com/arquivos/in/magic/479834/5ff88ab5431e5-i6hdr-ymu5g-21447357445ff88ab543214.jpg"
        title="Titulo"
        content="Conteudo"
        price="3,99"
      />
         <Card 
        img="https://repositorio.sbrauble.com/arquivos/in/magic/479834/600205508df46-601ei-7hom2-2140143701600205508dfa7.jpg"
        title="Titulo"
        content="Conteudo"
        price="3,99"
      />
         <Card 
        img="https://repositorio.sbrauble.com/arquivos/in/magic/479834/5ff88a83f0a7f-4anqo-t8px2-4810405285ff88a83f0ae1.jpg"
        title="Titulo"
        content="Conteudo"
        price="3,99"
      />
        <Card 
        img="https://repositorio.sbrauble.com/arquivos/in/magic/479834/5ffcda637989d-bi7vx-4fown-19771292605ffcda63798e3.jpg"
        title="Titulo"
        content="Conteudo"
        price="3,99"
      />
    </div>
  );
}

export default App;
