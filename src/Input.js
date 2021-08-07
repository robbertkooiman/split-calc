import React from 'react';
import "./Input.scss";

function Input({ name, title, type, placeholder, onChange, value }) {
    function inputHandler(e) {
        onChange(e.target.value);
    }

    return <div className="Field">
        <label htmlFor={name}>{title}</label>
        <div className="Input">
            <input id={name} value={value} type={type} name={name} placeholder={placeholder} onChange={inputHandler}></input>
        </div>
    </div>;
}

export default Input;