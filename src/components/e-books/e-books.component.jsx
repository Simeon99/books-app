import React, {useState} from "react";

import { withRouter } from 'react-router-dom';

import swal from 'sweetalert';
import CustomButton from "../custom-button/custom-button.component";

import './e-books.styles.scss'
const EBooks = ({knjige, history})=> {

    const handleClick = event=> {

        const userToken = sessionStorage.getItem('token');
        console.log("UUUUU",userToken);
        if(userToken == null){
            swal("Potrebna autentifikacija!", "Morate se ulogovati kako bi ste se pretplatili na knjigu.", "error");
        }else history.push("/pretplata/"+knjige.id)

        
    }
  
    return(
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage: `url(/img/knjige/${knjige.url_slika})`
            }}
            />
            <div className="collection-footer">

                <span className="name">{knjige.naziv}</span>
                <span className="ime-pisca">{knjige.pisac.ime_pisca+" "+knjige.pisac.prezime_pisca}</span><br />
                <span className="opis">{knjige.opis}</span><br />
                <span className="datum-izdavanja">Izdata: {knjige.datum_izdavanja}</span>
                <span className="cena">{knjige.cena} RSD</span>

                <CustomButton background-color="#FFD700" isGolden onClick={handleClick} type="submit">Pretplati se</CustomButton>
                
                
            </div>
        </div>
    )
    
}

export default withRouter(EBooks);