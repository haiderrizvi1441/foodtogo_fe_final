import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';

function FormActive() {

    const[currentForm, setCurrentForm] = useState('');

    // toggle swtich functionality to switch between login and register form 
    const toggleForm = (formName) =>{
        setCurrentForm(formName);
    }

  return (
    
    <div className='MainForm'>
        {
        // if currentForm = Login then render login else register
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
    </div>
  )
}

export default FormActive;