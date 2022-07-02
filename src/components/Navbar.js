import React from 'react';

//styles
import styles from '../components/Navbar.module.css'

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                botgram
            </div>
            <div className={styles.logout} onClick={logoutHandler}>
                logout
            </div>
        </div>
    );
};

export default Navbar;