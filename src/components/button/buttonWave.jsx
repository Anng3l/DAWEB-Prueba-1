import "./buttonStyle.css";

import React from 'react';

const ButtonWave = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            <div className="text">{children}</div>
            <div className="wave"></div>
        </button>
    );
};

export default ButtonWave;
