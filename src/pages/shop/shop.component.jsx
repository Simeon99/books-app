import React from "react";

import { EBooksList } from "../../components/e-book-list/e-book-list.component";

import'./shop.styles.scss'

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component{

    constructor(props){
        super(props);
  

        this.state ={
            collections: SHOP_DATA,
            knjige: []
        }
        
    }

    componentDidMount(){
        fetch('/api/knjige/getAll')
        .then(response => response.json())
        .then(knjige => {
            this.setState({knjige:knjige})
            console.log(this.state.knjige);
        })
    }

    render(){
        const {collections, knjige} = this.state
        const filterKnjige = knjige.map( k =>{
            console.log(k.id);
        })
        return(
            
            <div className="shopPage">
                <h1 className="heading">E KNJIGE</h1>
                {
                        <EBooksList knjige = {knjige} />         
                }    
            </div>
        )
    }

}
export default ShopPage;