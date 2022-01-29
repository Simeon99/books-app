import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({children, isGolden, isNegative, ...otherProps}) => (

    <button className={`${isGolden? 'is-golden':''} ${isNegative? 'is-negative':''} custom-button`} {...otherProps} >
        {children}
    </button>
)

export default CustomButton;