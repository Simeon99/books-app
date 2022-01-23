import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'

const Header = (props) => {


    const opts = {
        method: 'POST'
    }

    function logMeOut() {
        fetch("/logout", opts)
        .then((response) => {
            props.removeToken()
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })}
    console.log(props.token);
    
    return(
        <div className="header-container">
        <div className="header">
            <Link className="logo-container" to="/">
                {/* <Logo className="logo"/> */}
                <div className="background-image"
                    style={{
                        backgroundImage: `url("http://www.dragicilic.in.rs/images/NASLOVNA.jpg")`
                    }} 
                />
            
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    E-KNJIGE
                </Link>

                <Link className="option" to='/shop'>
                    KONTAKT
                </Link>
            {

                !props.token && props.token!=="" &&props.token!== undefined?  
                    <Link className="option" to='/signIn'>
                        LOG IN
                    </Link>
                :(
                    <Link onClick={logMeOut} className="option" to='/'>
                        LOG OUT
                    </Link>
                )
            }
                

               
                
                
            </div>
        </div>
    </div>
    )
   
}

export default Header;