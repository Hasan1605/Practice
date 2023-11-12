import { useState } from 'react';
import './App.css';
import Form from './Components/Container/Form/form';

function App() {
  
  const [status, setstatus] = useState("signup");
  function changeStatus(currentStatus){
    setstatus(currentStatus);
  }
  return (
    <div className='App-component'>
      <Form type={status} changeStatus={changeStatus}/>
    </div>
  );
}

export default App;
