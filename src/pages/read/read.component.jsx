import React from "react";
import ReadBook from "../../components/read-book/read-book.component";
import swal from 'sweetalert';
import './read.styles.scss'

class Read extends React.Component {


    constructor(props) {
        super(props);

        this.state= {
            knjiga : {}
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
        fetch(`/api/knjige/${this.props.match.params.knjigaId}`,opts)
        .then(res => {
            if (res.status === 200) return res.json();
            else {
                swal("Greška!", "Došlo je do greške pokušajte da se ulogujete ponovo.", "error");
            }
        })
        .then(data => {
            this.setState({ knjiga: data })
        })


    }



    render() {
        return (
            <div className="read">
                <ReadBook knjiga = {this.state.knjiga} />
            </div>
        )
    }

} 


export default Read;
