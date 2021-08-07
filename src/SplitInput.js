import React, { useEffect, useState } from 'react';
import "./Input.scss";

function Input({ name, title, onChange, value }) {
    const [duration, setDuration] = useState({ 'MM': '', "SS": '' });

    useEffect(() => {
        if (!!value) {
            var MM = ~~((value % 3600) / 60);
            var SS = round(value % 60);
            if (MM > 0) {
                SS = pad(SS);
            }
            setDuration({ 'MM': MM, 'SS': SS });
        }
    }, [value]);

    function getSeconds(dur) {
        return round(parseInt(dur.HH) || 0) * 3600 + (parseInt(dur.MM) || 0) * 60 + (parseFloat(dur.SS) || 0);
    }

    function pad(num) {
        const [beforeDecimal, afterDecimal] = String(num).split('.');
        return beforeDecimal.padStart(2, '0') + (!!afterDecimal ? ('.' + afterDecimal) : '.0');
    }

    function round(num) {
        return Math.round(num * 10) / 10;
    }

    function addDuration(newDuration) {
        newDuration = { ...duration, ...newDuration };
        setDuration(newDuration);
        onChange(getSeconds(newDuration));
    }

    return <div className="Field">
        <label htmlFor={name + "MM"}>{title}</label>
        <div className="DurationInput">
            <div className="Input">
                <input id={name + "MM"} type="number" name={name} value={duration.MM} placeholder="0" onChange={e => addDuration({ 'MM': e.target.value })} className="RightAlign"></input>
                <label htmlFor={name + "MM"}>Minutes</label>
            </div>
            <div className="Input Large">
                <input id={name + "SS"} type="text" name={name} value={duration.SS} placeholder="00.0" onChange={e => addDuration({ 'SS': e.target.value })} className="LeftAlign"></input>
                <label htmlFor={name + "SS"}>Seconds</label>
            </div>
        </div>
    </div>;
}

export default Input;