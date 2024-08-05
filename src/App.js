import './App.css';
import React, {useState} from 'react';
import Form from './component/Form';
import Greeting from './component/Greeting';




function App() {

 const [isSubmitted, setIsSubmitted] =  useState(false)

  

  return (
    <div>
      { isSubmitted ?<Greeting /> : <Form isSubmitted={false} /> }
    
    </div>
  );
}

export default App;
