import React, { useState } from 'react';
import styles from './profile.module.scss';

import ProfileTab from './profileTab/profileTab.jsx';

function profile() {
  const [getComponent, setComponent] = useState(0);

  return (
    <section className={styles.profile}>
      {/** 
      <section className={styles.mobilemenu}>
        <section className={styles.user}>
            <div className={styles.photo}></div>
            <div className={styles.name}>John Doe</div>
            <div className={styles.role}>student</div>
        </section>
        <button className={styles.active} onClick={() => setComponent(0)}>Profile</button>
        <button onClick={() => setComponent(1)}>Courses</button>
        <button onClick={() => setComponent(2)}>Account</button>
        <button onClick={() => setComponent(3)}>Settings</button>
      </section>
      **/}
      <section className={styles.menu}>
        <section className={styles.user}>
            <div className={styles.photo}></div>
            <div className={styles.name}>John Doe</div>
            <div className={styles.role}>student</div>
        </section>
        <button className={styles.active} onClick={() => setComponent(0)}>Profile</button>
        <button onClick={() => setComponent(1)}>Courses</button>
        <button onClick={() => setComponent(2)}>Account</button>
        <button onClick={() => setComponent(3)}>Settings</button>
      </section>
      <section className={styles.main}>
        {getComponent === 0 && (
          <ProfileTab />
        )}
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
