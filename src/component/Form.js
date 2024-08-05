import React from "react";
import axios from 'axios';

function Form (props){
    function handleOnSubmit(events) {
        events.preventDefault();
    
        const name = events.target.elements.name.value;
        const email = events.target.elements.email.value;
    
        
    
        axios.post( process.env.REACT_APP_BACKEND_URL , ({ name, email })).then((response => {
          console.log(response.data)
          // this is block where i come to know
          //data inserted successfully

        })).catch((error) => {
          console.log(error)
          // data not inserted
        })
      }
    
      return (
        <div>
          <h1>Welcome to the ProdSell Intern 😊</h1>
    
          <form onSubmit={handleOnSubmit}>
            <div className='form-style'>
              <input name='name' placeholder='Enter Name' type='text' />
            </div>
            <div className='form-style'>
              <input name='email' placeholder='Enter Email' type='text' />
            </div>
            <div className='form-style'>
              <input type='submit' />
            </div>
          </form>
    
        </div>
      );
}

export default Form;