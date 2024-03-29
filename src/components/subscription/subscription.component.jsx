import React from "react";
import SubscriptionBook from "../subscription-book/subscription-book.component";
import SubscriptionForm from "../subscription-from/subscription-form.component";
import swal from 'sweetalert';
import './subscription.styles.scss'

class Subscription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            knjige:{}
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.knjigaId)
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
                this.setState({ knjige: data })
                console.log(this.state.knjige);
            })

        
    }

    render() {
        return (
            <div className="subscription">

                <SubscriptionBook knjia={this.state.knjige}  />

                <SubscriptionForm k={this.state.knjige}/>
            </div>
        )
    }

} 

export default Subscription;