import React from 'react';
import './ButtonGroup.scss';

function ButtonGroup({ children }) {
    return (
        <div className="ButtonGroup">
            {children}
        </div>
    );
}

export default ButtonGroup;