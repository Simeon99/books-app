import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import swal from 'sweetalert';
import './subscription-form.styles.scss'


class SubscriptionForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            broj : "",
            sifra : ""
        }
    }


    handleSubmit = event => {
        event.preventDefault();

        const {broj, sifra} = this.state;
        var token = sessionStorage.getItem('token');
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({
                "broj": broj,
                "sifra": sifra,
                "svota": this.props.k.cena,
                "id_knjige": this.props.k.id
            })
        }

        fetch('/api/pretplata',opts)
        .then(res =>{
            if(res.status === 200) return res.json();
            else {
                
                swal("Greška!", "Došlo je do greške pri plaćanju."+res, "error");
                return ;
            }
        })
        .then(data =>{

            if(typeof data.msg !== 'string') swal("Čestitamo !", "Uspešno ste se pretplatili na knjigu. Ostalo vam je još: "+data.msg+" RSD na računu.", "success");
            else  swal("Greška!", "Došlo je do greške pri plaćanju: "+data.msg, "error");
        })
        .catch(error => {
            console.log("There was an error!", error);
        })

        console.log("Submitted: ", broj, sifra);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){

        const {broj, sifra} = this.state

        return(
            <div className="subscribe">
                
                <h2 className="title">Podaci o racunu</h2>
                <span>Unesite podatke o vasem racunu</span>
                <form className="subsctive-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='broj'
                        value={broj}
                        onChange={this.handleChange}
                        label='Broj'
                        required
                    />
                    <FormInput
                        type='text'
                        name='sifra'
                        value={sifra}
                        onChange={this.handleChange}
                        label='Šifra'
                        required
                    />
                    <CustomButton isGold type='submit'>Plati | {this.props.k.cena} RSD</CustomButton>


                </form>
            </div>
        )
    }



}

export default SubscriptionForm;
