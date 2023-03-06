import './App.css';
import React from 'react';

let name = "prashant singh";
const element = React.createElement('h1', {className: 'greeting'}, 'Hello World');

function App() {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
          <li>About me</li>
          <li>Login</li>
        </ul>
      </nav>
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, ducimus est? Laborum magnam, esse eos dolores quos ea numquam, temporibus explicabo, voluptates quam hic saepe. Perspiciatis, nulla accusantium! Aut cumque adipisci eos? Voluptatum, dolorem.</p>
    </div>

  );
}

export default App;
