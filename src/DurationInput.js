import React, { useEffect, useState } from 'react';
import "./Input.scss";

function Input({ name, title, onChange, value }) {
    const [duration, setDuration] = useState({ 'HH': '', 'MM': '', 'SS': '' });

    useEffect(() => {
        if (!!value) {
            var HH = ~~(value / 3600);
            var MM = ~~((value % 3600) / 60);
            var SS = round(value % 60);
            if (HH > 0) {
                MM = pad(MM);
                SS = pad(SS);
            } else if (MM > 0) {
                SS = pad(SS);
            }
            setDuration({ 'HH': HH, 'MM': MM, 'SS': SS });
        } else {
            setDuration({ 'HH': '', 'MM': '', 'SS': '' });
        }
    }, [value]);

    function getSeconds(duration) {
        return round(parseInt(duration.HH) || 0) * 3600 + (parseInt(duration.MM) || 0) * 60 + (parseFloat(duration.SS) || 0);
    }

    function pad(num) {
        const [beforeDecimal, afterDecimal] = String(num).split('.');
        return beforeDecimal.padStart(2, '0') + (!!afterDecimal ? ('.' + afterDecimal) : '');
    }

    function round(seconds) {
        return Math.round(seconds * 10) / 10;
    }

    function inputHandler(e, type) {
        addDuration({ [type]: e.target.value });
    }

    function addDuration(newDuration) {
        newDuration = { ...duration, ...newDuration };
        setDuration(newDuration);
        onChange(getSeconds(newDuration));
    }

    return <div className="Field">
        <label htmlFor={name + "HH"}>{title}</label>
        <div className="DurationInput">
            <div className="Input">
                <input id={name + "HH"} type="number" name={name} value={duration.HH} placeholder="0" onChange={e => inputHandler(e, 'HH')}></input>
                <label htmlFor={name + "HH"}>Hours</label>
            </div>
            <div className="Input">
                <input id={name + "MM"} type="number" name={name} value={duration.MM} placeholder="00" onChange={e => inputHandler(e, 'MM')}></input>
                <label htmlFor={name + "MM"}>Minutes</label>
            </div>
            <div className="Input">
                <input id={name + "SS"} type="number" name={name} value={duration.SS} placeholder="00.0" onChange={e => inputHandler(e, 'SS')}></input>
                <label htmlFor={name + "SS"}>Seconds</label>
            </div>
        </div>
    </div>;

}

export default Input;