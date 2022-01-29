import React from "react";
import MojeKnjigeList from "../../components/moja-e-knjiga-list/moja-e-knjiga-list.component";

import './moje-knjige.styles.scss'


class MojeKnjige extends React.Component{

    constructor(){
        super();

    }


    render(){
        return(
            <div>
                <MojeKnjigeList/>
            </div>
        )
    }

}

export default MojeKnjige;

