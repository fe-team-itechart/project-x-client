import React from 'react';
import styles from './style.module.scss';


const Spinner = () => {
    const {
        lds_roller
    } = styles;
    return (
        <div className={lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
}

export default Spinner;