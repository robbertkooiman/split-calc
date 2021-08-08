import React, { useEffect, useState } from 'react';
import "./Input.scss";

const MILE_TO_METER = 1609.34;

function Input({ name, title, type, placeholder, onChange, value }) {
    const [distance, setDistance] = useState('');

    useEffect(() => {
        if (!!value) {
            setDistance(Math.round(value) + 'm');
        } else {
            setDistance('');
        }
    }, [value]);

    function inputHandler(e) {
        setDistance(e.target.value);
        onChange(getDistance(e.target.value));
    }

    function getDistance(input) {
        const regex = /(\d?\.?\d+) ?(km|mi|k|m)$/i
        const match = input.match(regex);
        if (match) {
            const unit = match[2].toLowerCase();
            switch (unit) {
                case 'm':
                    return parseFloat(match[1]);
                case 'km':
                case 'k':
                    return parseFloat(match[1] * 1000);
                case 'mi':
                    return parseFloat(match[1] * MILE_TO_METER);
                default:
                    return input;
            }
        }
        return input;
    }

    return <div className="Field">
        <label htmlFor={name}>{title}</label>
        <div className="Input">
            <input id={name} type={type} name={name} value={distance} placeholder={placeholder} onChange={inputHandler}></input>
        </div>
    </div>;
}

export default Input;