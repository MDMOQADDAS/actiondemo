import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './component/Form';
import Greeting from './component/Greeting';

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState()
  useEffect(() => {
    console.log("changed!")
    console.log(isSubmitted)
  }, [isSubmitted])


  return (
    <div>
      {isSubmitted ? <Greeting name={name} /> : <Form setName={setName} setIsSubmitted={setIsSubmitted} />}

    </div>
  );
}

export default App;
