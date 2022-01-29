import React from "react";

import EBooks from "../e-books/e-books.component";

import './e-book-list.styles.scss'

export const EBooksList = props => (

    
    <div className="ebooks-list">
        
        
        {
            props.knjige.map(k =>(
                <EBooks key = {k.id} knjige = {k}/>
                
            ))
        }
        
        
        
    </div>

)

