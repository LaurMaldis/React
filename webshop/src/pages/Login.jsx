import React from 'react';
import { useContext } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';


const Login = () => {
    const [message, setMessage] = useState([]);
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    
    const Url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrQfGPyJzo65W4ujXl8yBf0iLNEqNj7Zw";


    const LI = () => {
        const userData = {
            "email": emailRef.current.value, 
            "password": passRef.current.value, 
            "returnSecureToken": true
        };

        fetch(Url, { "method": "POST", "body": JSON.stringify(userData)})
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    setMessage(json.error.message)
                } else {
                console.log(json.idToken)
                navigate("/admin");
                authCtx.login(json.idToken);
                };
        })         
    };

  return (
    <div>
        <div>{message}</div> 
        <label>E-mail</label> <br />
        <input ref={emailRef} type="text"/> <br />
        <label>Parool</label> <br />
        <input ref={passRef} type="password"/> <br />
        <button onClick={LI}>Logi sisse</button>

    </div>
  )
}

export default Login