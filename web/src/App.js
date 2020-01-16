import React, { useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div> 
          
          <div className="input-group">
          
          <div className="input-block">
            <label htmlFor="Latidude">Latidude</label>
            <input name="Latidude" id="Latidude" required/>
          </div> 
          
          <div className="input-block">
            <label htmlFor="techs">Longitude</label>
            <input name="Longitude" id="Longitude" required/>
          </div> 

          </div>
          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31075972?s=460&v=4" alt="Joao Marcelo"/>
              <div className="user-info">
                <strong>Joao Marcelo</strong>
                <span>React, C, C++</span>
              </div>
            </header>
            <p>Computer Engineering Student at University of Brasília</p>
            <a href="https://github.com/jmarcelonunes">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31075972?s=460&v=4" alt="Joao Marcelo"/>
              <div className="user-info">
                <strong>Joao Marcelo</strong>
                <span>React, C, C++</span>
              </div>
            </header>
            <p>Computer Engineering Student at University of Brasília</p>
            <a href="https://github.com/jmarcelonunes">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31075972?s=460&v=4" alt="Joao Marcelo"/>
              <div className="user-info">
                <strong>Joao Marcelo</strong>
                <span>React, C, C++</span>
              </div>
            </header>
            <p>Computer Engineering Student at University of Brasília</p>
            <a href="https://github.com/jmarcelonunes">Acessar perfil no Github</a>
          </li>
          
        </ul>
      </main>
    </div>
  
  );
}

export default App;
