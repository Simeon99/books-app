import React from "react";

import "./subscription-book.styles.scss"

class SubscriptionBook extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     knjige: {}
        // };
    }

    // componentDidMount() {
    //     fetch(`/api/knjige/${this.props.knjigaId}`)
    //         .then(res => {
    //             if (res.status === 200) return res.json();
    //             else {
    //                 swal("Greška!", "Došlo je do kreške pri kreiranju naloga.", "error");
    //             }
    //         })
    //         .then(data => {
    //             this.setState({ knjige: data })
    //             console.log(this.state.knjige);
    //         })

    //     console.log(this.props);
    // }

    componentDidMount(){
        console.log("AAAA",this.props);
    }

    render() {


        return (
            <div className="sbuscription-book">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(/img/knjige/${this.props.knjia.url_slika})`
                    }}
                />
                <div className="collection-footer">
                   
                    <span className="name">{this.props.knjia.naziv}</span>
                    {/* <span className="ime-pisca">{this.props.knjia.pisac.ime_pisca + " " + this.props.knjia.pisac.prezime_pisca}</span><br /> */}
                    <span className="opis">{this.props.knjia.opis}</span><br />
                    <span className="datum-izdavanja">Izdata: {this.props.knjia.datum_izdavanja}</span>
                    <span className="cena">{this.props.knjia.cena} RSD</span>


                </div>
            </div>
        )
    }

}

export default SubscriptionBook;

