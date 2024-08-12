import React from "react";
import axios from 'axios';

function Form({ setIsSubmitted , setName }) {
  function handleOnSubmit(events) {
    events.preventDefault();

    const name = events.target.elements.name.value;
    const email = events.target.elements.email.value;

    axios.post(process.env.REACT_APP_BACKEND_URL, ({ name, email })).then((response => {
      console.log(response.data.name)
      // this is block where i come to know
      //data inserted successfully
      setIsSubmitted(true);
      setName(response.data.name);


    })).catch((error) => {
      console.log(error)
      // data not inserted
    })
  }

  return (
    <div className="custom">
      <h1>Welcome to the CI CD 😊</h1>
      <div>
        <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='form-style'>
            <input name='name' placeholder='Enter Name' type='text' className="input-style" />
          </div>
          <div className='form-style'>
            <input name='email' placeholder='Enter Email' type='text' className="input-style" />
          </div>
          <div className='form-style'>
            <input type='submit' className='submit' />
          </div>
        </form>
      </div>

    </div>
  );
}

export default Form;