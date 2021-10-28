import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="Login">
           <div className="Login_Container">
               <img src="https://i.pinimg.com/originals/5b/6a/93/5b6a93d1d868135f1cc22505f3c57ea7.png" width="50%"height="50%" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to Webchat</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in with Google</Button>
           </div>
        </div>
    );
}

export default Login
