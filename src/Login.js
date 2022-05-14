import React from 'react';
import './Login.css';
import db from './firebase';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';


function Login() {

    const[{user},dispatch]= useStateValue();

   
var abc="hi";
    const signIn = () => {
      
        auth.signInWithPopup(provider)
        .then((result)=> {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
      
            db.collection("login").add({
                name: result.user.displayName,
              }) ; 
        })
       .catch((error) => alert(error.message)); 
          
  
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/en/b/b8/GGSIU_logo.svg" alt="" />
                <div className="login_text">
                    <h1>Sign in to ipu chat forum by google</h1>
                </div>
                <button type="submit" onClick={signIn} >Sign in by google </button>
                
            </div>
        </div>
    )
}

export default Login
