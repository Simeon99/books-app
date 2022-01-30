import React from "react";

import MenuItem from '../menu-item/menu-item.component';

import background from "../../images/books.jpg";
import aboutWriter from "../../images/about-writer.jpg"
import myEKnjige from "../../images/myEKnjige.jpg"
import eRacun from "../../images/add-paiing.jpg"
import registracija from '../../images/registracija.jpg'
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {

            sections:[
                  {
                    title: 'Kreiranje naloga',
                    imageUrl: registracija,
                    id: 1,
                    linkUrl: 'signIn'
                  },
                  {
                    title: 'Dodaj račun',
                    imageUrl: eRacun,
                    id: 2,
                    linkUrl: 'dodajRacun'
                  },
                  {
                    title: 'o autoru',
                    imageUrl: aboutWriter,
                    id: 3,
                    linkUrl: 'oAutoru'
                  },
                  {
                    title: 'e-knjige',
                    imageUrl: background,
                    size: 'large',
                    id: 4,
                    linkUrl: 'eknji'
                  },
                  {
                    title: 'moje e-knjige',
                    imageUrl: myEKnjige,
                    size: 'large',
                    id: 5,
                    linkUrl: 'mojeKnjige'
                  }
            ]

        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) => (
                        <MenuItem key = {id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }

}

export default Directory;