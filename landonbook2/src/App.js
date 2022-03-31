
import React, { useState } from "react";
import Form from "./Components/Form";
import './App.css';
import formSchema from "./validation/formSchema";
import * as yup from "yup";
import axios from "axios";

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  agree: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  agree: ''
}
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] =useState([]);

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/users", formValues)
    .then(res => {
      console.log(res.data)
      setUsers( [res.data, ...users ]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }
  
  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
        <h1>Landonbook App</h1>
        <Form 
        values={formValues} 
        change={handleChange} 
        errors={formErrors} 
        submit={handleSubmit}
        />
        
        {users.map(user => (
          <div key={user.id}>
            <p>{user.createdAt}</p>
            <p>{user.email}</p>
          </div>
        ))}
    </div>

  );
}

export default App;
