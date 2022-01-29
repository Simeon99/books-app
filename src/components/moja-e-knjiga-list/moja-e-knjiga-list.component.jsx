import React from "react";
import MojeEKnjige from "../moja-e-knjiga/moja-e-knjiga.component";
import swal from 'sweetalert';

import './moja-e-knjiga-list.styles.scss'

class MojeKnjigeList extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            knjige:[]
        }
    }

    componentDidMount(){

        var token = sessionStorage.getItem('token');
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`, 
            }
        }


        fetch('/api/pretplate', opts)
        .then(res =>{
            if(res.status === 200) return res.json();
            else {
                
                swal("Greška!", "Došlo je do greske.", "error");
                return ;
            }
        })
        .then(data => {
            this.setState({knjige:data})
        })
    }

    render(){

        const {knjige} =  this.state
        return(
            <div className="moje-kjnige-list">
                {
                    knjige.map( k => 
                            <MojeEKnjige key={k.id} knjiga = {k} 
                        />)
                }
                

            </div>
        )
    }
    
}

export default MojeKnjigeList;
