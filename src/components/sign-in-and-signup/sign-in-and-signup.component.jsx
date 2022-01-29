import React from "react";

import SignIn from "../sign-in/sign-in.component"
import SignUp from "../sign-up/sign-up.component";

import './sign-in-and-signup.styles.scss';

const SignInAndSignUpPage = (props) =>(



    <div className="sign-in-and-sign-up">
        
        <SignIn token={props.token} setToken={props.setToken}/>

        <SignUp/>

    </div>
    
)

export default SignInAndSignUpPage;