import { useState } from "react";
import loginDetails from "./loginDetails.json"

function LoginComponent({updateState}){
    const[formData,SetFormData] = useState({
        email:'',
        password:''
    })

    const {email,password} = formData;

    function handleSubmit(e){
        e.preventDefault();
        if (loginDetails.email === email && loginDetails.password === password){
            updateState(true);
        }
        // console.log("test");
    }

    function handleChange(e){
e.preventDefault();
const {name,value} = e.target;
SetFormData({...formData, [name]:value});
console.log(formData)

    }
    return(
<div className="wrap">
     <form onSubmit ={handleSubmit}>
        <h2 className ="login"> LOGIN </h2>
        <div className = "email">
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange = {handleChange}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={password} onChange = {handleChange}/>
        </div>
        </div>
        <div className="submit">
        
            <button className="button" type="submit"> Login </button>
        </div>
        
    </form>
</div>
    );
}

export default LoginComponent;