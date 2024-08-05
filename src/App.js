import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './component/Form';
import Greeting from './component/Greeting';




function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  useEffect(() => {
    console.log("changed!")
    console.log(isSubmitted)
  }, [isSubmitted])


  return (
    <div>
      {isSubmitted ? <Greeting /> : <Form setIsSubmitted={setIsSubmitted} />}

    </div>
  );
}

export default App;
