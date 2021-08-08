import React from 'react';
import './History.scss';

function History({ history }) {


    function formatTime(seconds, toMinutes) {
        let formatted = new Date(seconds * 1000 || 0).toISOString().substr(11, 10)
        formatted = toMinutes ? formatted.replace(/^[0:]{4}/, '') : formatted;
        return formatted;
    }

    return (
        <div className="History">
            <table>
                <tbody>
                    {history.reverse().map(item =>
                        <tr key={item.id}>
                            <td>{formatTime(item.time)}</td>
                            <td>{item.distance}</td>
                            <td>{formatTime(item.split, true)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default History;