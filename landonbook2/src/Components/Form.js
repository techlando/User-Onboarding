import React from "react";


const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, agree } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

return (

    <div>
        

    <form onSubmit={onSubmit}>
        
        <h2>New User Signup</h2>
        <p>{errors.username}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.agree}</p>
        
        
        <label>Name:
            <input
                type="text"
                name="username"
                value={username}
                placeholder="Type your name"
                maxLength="30"
                onChange={onChange}
            />
        </label>
     
        <label>Email
            <input 
            type="email"
            name="email"
            value={email}
            placeholder="type an email"
            onChange={onChange}
            />
        </label>
        <label>Password
            <input 
            type="password"
            name="password"
            value={password}
            placeholder="create a password"
            onChange={onChange}
            />
        </label>
        <label>Terms of Service
            <input 
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={onChange}


            />

        </label>

    <div className="submit">
        <input type="submit" name="submitbtn" value="Create a Friend" />
        
    </div>

    </form>
    </div>
)

}



export default Form;