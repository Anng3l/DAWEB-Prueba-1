import "./buttonStyle.css";

import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            <div className="text">{children}</div>
            <div className="wave"></div>
        </button>
    );
};

export default Button;
