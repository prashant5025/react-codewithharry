import './App.css';
import React from 'react';

const name = 'John Doe';

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
