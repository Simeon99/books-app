import React from "react";
import CollectionItem from "../collection-item/collecion-item.component";

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (

    <div className="collection-preview">
        <h1 className="title">E KNJIGE</h1>
        <div className="preview">

            {
                items.filter((item, idx) => idx<4).map(({id, ...otherItemsProps}) =>(
                    <CollectionItem key={id} {...otherItemsProps}/>
                ))
            }

        </div>
    </div>
)

export default CollectionPreview;