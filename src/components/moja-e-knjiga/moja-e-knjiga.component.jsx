import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from 'react-router-dom';

import './moja-e-knjiga.styles.scss'

const MojeEKnjige = (props) => {
    
    const handleClick = event =>{
        console.log("Click Citaj");

        props.history.push(`/citajKnjigu/${props.knjiga.id}`);

    }

    const handleClickDelete = event =>{
        console.log("Click Delete");
    }
    
    return(
    <div className="moje-e-knjige">

        <div 
            className="image"
            style={{
                backgroundImage: `url(/img/knjige/${props.knjiga.url_slika})`
            }}
            />
            <div className="collection-footer">

                <span className="name">{props.knjiga.naziv}</span>
                <span className="opis">{props.knjiga.opis}</span><br />
                <span className="datum-izdavanja">Izdata: {props.knjiga.datum_izdavanja}</span>
               
              
                {/* <CustomButton background-color="#FFD700" isGolden onClick={handleClick} type="submit">Pretplati se</CustomButton>
                 */}
                
            </div>

            <div className="buttons">
                <CustomButton background-color="#FFD700" isGolden onClick={handleClick} type="submit">Čitaj</CustomButton>
                <CustomButton background-color="#ff0000" isNegative onClick={handleClickDelete} type="submit">Ukloni</CustomButton>
            </div>

    </div>
)}
export default withRouter(MojeEKnjige) 