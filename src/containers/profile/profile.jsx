import React, { useState } from 'react';
import styles from './profile.module.scss';
import { FaBars, FaWindowClose } from 'react-icons/fa';

import ProfileTab from './profileTab/profileTab.jsx';

function profile() {
  const [getComponent, setComponent] = useState(0);
  const [menu, setMenu] = useState({ marginLeft: '-100%' });

  return (
    <section className={styles.profile}>
      <section className={styles.mobileBurger}>
        <button onClick={() => setMenu({ marginLeft: '0' })}>
          <FaBars />
        </button>
      </section>
      <section className={styles.mobilemenu} style={menu}>
        <section className={styles.user}>
          <div className={styles.photo} />
          <div className={styles.name}>John Doe</div>
          <div className={styles.role}>student</div>
        </section>
        <button
          className={styles.active}
          onClick={() => {
            setComponent(0), setMenu({ marginLeft: '-100%' });
          }}>
          Profile
        </button>
        <button
          onClick={() => {
            setComponent(1), setMenu({ marginLeft: '-100%' });
          }}>
          Courses
        </button>
        <button
          onClick={() => {
            setComponent(2), setMenu({ marginLeft: '-100%' });
          }}>
          Account
        </button>
        <button
          onClick={() => {
            setComponent(3), setMenu({ marginLeft: '-100%' });
          }}>
          Settings
        </button>
        <button className={styles.closeButton} onClick={() => setMenu({ marginLeft: '-100%' })}><FaWindowClose/></button>
      </section>

      <section className={styles.menu}>
        <section className={styles.user}>
          <div className={styles.photo} />
          <div className={styles.name}>John Doe</div>
          <div className={styles.role}>student</div>
        </section>
        <button className={styles.active} onClick={() => setComponent(0)}>
          Profile
        </button>
        <button onClick={() => setComponent(1)}>Courses</button>
        <button onClick={() => setComponent(2)}>Account</button>
        <button onClick={() => setComponent(3)}>Settings</button>
      </section>
      <section className={styles.main}>
        {getComponent === 0 && <ProfileTab />}
        {getComponent === 1 && (
          <section>
            <p>Courses</p>
          </section>
        )}
        {getComponent === 2 && (
          <section>
            <p>Account</p>
          </section>
        )}
        {getComponent === 3 && (
          <section>
            <p>Settings</p>
          </section>
        )}
      </section>
    </section>
  );
}

export default profile;
