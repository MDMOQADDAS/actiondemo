import './App.css';
import axios from 'axios';


function App() {

  function handleOnSubmit(events) {
    events.preventDefault();

    const name = events.target.elements.name.value;
    const email = events.target.elements.email.value;

    console.log(process.env.REACT_APP_BACKEND_URL)

    axios.post( process.env.REACT_APP_BACKEND_URL , ({ name, email })).then((response => {
      console.log(response.data)
    })).catch((error) => {
      console.log(error)
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

export default App;
