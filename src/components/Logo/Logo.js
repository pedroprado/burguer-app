import React from 'react';
import burgerLogo from '../../assets/images/burger_logo.png';
import classes from './Logo.css';

const logo = props => {
    //this only works on development mode!
    //in production mode, this paths does not existis, cause webpack will create only the source folder
    const logPath = '../../assets/images/burger_logo.png'; 
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt='MyBurger'/>
        </div>
    );
};

export default logo;