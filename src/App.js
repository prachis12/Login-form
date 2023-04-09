import LoginComponent from './Assignment01_logincomponent';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';
import './Assignment01_logincomponent.css';
import './ToDoList.css'




function App() {
  const [loginState, setLoginState] = useState(false);
  return (
    <div className='container'>
    {!loginState && <LoginComponent updateState = {setLoginState}/>}
    {loginState && <ToDoList/>}
    
    
    </div>
  );
}

export default App;
