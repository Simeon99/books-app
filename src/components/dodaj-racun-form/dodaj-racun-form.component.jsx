import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import swal from 'sweetalert';

import './dodaj-racun-from.styles.scss'

class DodajRacunForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            broj : "",
            sifra : "",
            stanje : ''
        }
    }


    handleSubmit = event => {
        event.preventDefault();

        const {broj, sifra, stanje} = this.state;
        var token = sessionStorage.getItem('token');
        console.log(typeof stanje);

        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify({
                "broj": broj,
                "sifra": sifra,
                "stanje": parseInt(stanje)
            })
        }

        fetch('/api/racun/add',opts)
        .then(res =>{
            if(res.status === 200) return res.json();
            else {
                
                swal("Greška!", "Došlo je do kreške pri dodavanju računa.", "error");
                return ;
            }
            
           
        })
        .then(data =>{

            if(data) swal("Čestitamo !", "Uspešno ste kreirali račun: "+data.broj, "success");
        })
        .catch(error => {
            console.log("There was an error!", error);
        })

        console.log("Submitted: ", broj, sifra, stanje);
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){

        const {broj, sifra, stanje} = this.state

        return(
            <div className="subscribe">
                <h2 className="title">Dodajte račun</h2>
                <span>Unesite podatke o vasem računu</span>
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
                        label='Sifra'
                        required
                    />
                    <FormInput
                        type='number'
                        name='stanje'
                        value={stanje}
                        onChange={this.handleChange}
                        label='stanje'
                        required
                    />


                    <CustomButton type='submit'>Dodaj racun</CustomButton>


                </form>
            </div>
        )
    }
    

}

export default DodajRacunForm;