import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import Burger from './burgerMenu';
import styles from './styles.module.scss';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="src\assets\logoLight.png" alt="Logo" />
      </div>
      {width > 768 ? (
        <>
          <div className={styles.search}>
            <input type="text" placeholder="search" />
            <MdSearch className={styles.icon} />
          </div>
          <div className={styles.menu}>
            <li className={styles.link}>Sources</li>
            <li className={styles.link}>Categories</li>
            <div className={styles.button}>Log in</div>
            <div className={styles.button}>Register</div>
          </div>
        </>
      ) : (
        <Burger />
      )}
    </header>
  );
};

export default Header;
