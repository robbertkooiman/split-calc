import React from 'react';
import './History.scss';

function History({ history }) {


    function formatTime(seconds, toMinutes) {
        let formatted = new Date(seconds * 1000 || 0).toISOString().substr(11, 10)
        formatted = toMinutes ? formatted.replace(/^[0:]{4}/, '') : formatted;
        return formatted;
    }

    function formatDistance(meters) {
        meters = Math.round(meters);
        if (meters % 1000 === 0) {
            const km = meters/1000;
            return km + 'k';
        }
        return meters + 'm';
    }

    return (
        <div className="History">
            <table>
                <tbody>
                    {history.map(item =>
                        <tr key={item.id}>
                            <td>{formatTime(item.time, true)} {item.comments.time ? <p className="Comment">{item.comments.time}</p> : null}</td>
                            <td>{formatDistance(item.distance)} {item.comments.distance ? <p className="Comment">{item.comments.distance}</p> : null}</td>
                            <td>{formatTime(item.split, true)} {item.comments.split ? <p className="Comment">{item.comments.split}</p> : null}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default History;