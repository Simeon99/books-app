import React from "react";

import './about-writer.styles.scss'

class AboutWriter extends React.Component {

    constructor() {
        super();
        this.state = {
            pisac: {}
        }
    }

    componentDidMount() {

        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ime_pisca": "Dragić",
                "prezime_pisca": "Ilić"
            })
        }

        fetch('/api/pisac/get', opts)
            .then(res => res.json())
            .then(pisac => {
                this.setState({ pisac: pisac })
            })
    }

    render() {

        const { pisac } = this.state
        const pisacknjige = pisac.knjige
        console.log('PPP', pisacknjige);
        return (
            <div className="about-writer">
                <h1 className="pisac-ime">{pisac.ime} {pisac.prezime}</h1>
                <span className="bigrafija">{pisac.biografija}</span>
                <h2>Knjige:</h2>
                {
                    pisac.knjige?.map(m => (
                        
                            <span className="knjiga">{m.naziv}</span>
                        
                    ))
                }
                <h2>Kontakt:</h2>
                {
                    pisac.kontakt?.map(k => (
                        <div className="kontakt">
                            <span>{k.email}</span>
                            <span>{k.telefon}</span>
                            <span>{k.adresa}</span>
                        </div>
                    ))
                }

            </div>
        )
    }

}

export default AboutWriter;
