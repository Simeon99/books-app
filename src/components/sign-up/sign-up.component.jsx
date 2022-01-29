import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import swal from 'sweetalert';
import './sign-up.styles.scss'


class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            ime: '',
            prezime: '',
            email: '',
            password: '',
            confirmPassword: '',
            validCredentials: true
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {ime, prezime, email, password, confirmPassword} = this.state

        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ime": ime,
                "prezime": prezime,
                "email": email,
                "password": password
            })
        }

        if (password !== confirmPassword) {
            this.setState({validCredentials: false})
            return;
        }

        fetch('/api/korisnik/add', opts)
        .then( res => {
            if (res.status === 200) return res.json();
                else {
                    swal("Greška!", "Došlo je do kreške pri kreiranju naloga.", "error");
                }
        })
        .then(data => {
            swal("Čestitamo "+ime+"!", "Uspešno ste kreirali nalog", "success");
        })

        this.setState({ime:'',prezime: '', email: '', password: '', confirmPassword:'',  validCredentials: true})
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {

        const { ime, prezime, email, password, confirmPassword } = this.state;
        return (

            <div className="sign-up">
                <h2 className="title">Nemam nalog?</h2>
                <span>Kreirajte vaš nalog sa email-om i password-om</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='ime'
                        value={ime}
                        onChange={this.handleChange}
                        label='Ime'
                        required
                    />
                    <FormInput
                        type='text'
                        name='prezime'
                        value={prezime}
                        onChange={this.handleChange}
                        label='Prezime'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Potvrdi password'
                        required
                    />
                    

                    {
                        !this.state.validCredentials ?
                            <div class="alert">
                                <span class="closebtn"></span>
                                <strong>Greška!</strong> Password se ne poklapa sa potvrdom passworda.
                            </div> :
                            ""
                    }

                    <CustomButton type='submit'>Registruj se</CustomButton>


                </form>
            </div>
        )

    }


}

export default SignUp;
