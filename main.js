import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div class="card">
      <input id="counter" type="text" placeholder="Escribe aquí"></input>
      <p id="response"></p>
    </div>
`;

setupCounter(document.querySelector('#counter'))
