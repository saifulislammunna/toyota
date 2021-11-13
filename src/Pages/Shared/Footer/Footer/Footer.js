import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright  } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';


const Footer = () => {
    return (
        <div>
        <div className="footer">
            <h5>Copyright <FontAwesomeIcon icon={faCopyright} /> 2021 Toyota</h5>
        </div>
    </div>
    );
};

export default Footer;