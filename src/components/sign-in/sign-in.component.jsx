import React from "react";

import { withRouter } from 'react-router-dom';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import swal from 'sweetalert';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            validCredentials: true
        }
    }



    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.email, this.password);
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            })
        }

        fetch('/api/login', opts)
            .then(res => {
                if (res.status === 200) return res.json();
                else {

                    this.setState({ validCredentials: false })
                }
            })
            .then(data => {
                console.log("This came from the back end:", data)
                this.props.setToken(data.access_token)
                this.props.history.push('/')


            }
            )
            .catch(error => {
                console.log("There was an error!", error);
            })
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {

        const validCredentials = this.validCredentials

        return (
            <div className="sign-in">
                <h2>Imate nalog?</h2>
                <span>Ulogujte se sa vašim email-om i password-om</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    {
                        !this.state.validCredentials ?
                            <div class="alert">
                                <span class="closebtn"></span>
                                <strong>Greška!</strong> Pogrešan email ili password.
                            </div> :
                            ""
                    }
                    <CustomButton type="submit">Uloguj se</CustomButton>
                </form>

            </div>
        )
    }

}

export default withRouter(SignIn);