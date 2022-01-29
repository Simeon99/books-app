import React from "react";
import ReadBook from "../../components/read-book/read-book.component";

import './read.styles.scss'

const Read = (props) => {

    const {...otherProps} = props;
    

    return (
        <div className="read">
            <h2>{props.match.params.knjigaId}</h2>
            <ReadBook {...otherProps} />
        </div>
    )
}


export default Read;
