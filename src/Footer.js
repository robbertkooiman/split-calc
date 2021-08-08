import React from 'react';
import './Footer.scss';
import packageJson from '../package.json';

function Footer({ }) {
    return (
        <footer>
            <p>Made by <a href="https://robbertkooiman.com">Rob</a> | Version {packageJson.version}</p>
        </footer>
    );
}

export default Footer;