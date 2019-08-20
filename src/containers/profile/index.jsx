import React, { useState } from 'react';
import { FaWindowClose, FaUserCircle } from 'react-icons/fa';
import styles from './styles.module.scss';
import { ProfileTab } from "./profileTab";
import { SettingsTab } from './settingsTab';

export const Profile = () => {
  const [getComponent, setComponent] = useState(0);
  const [menus, setMenu] = useState({ marginLeft: '-105%' });
  const {
    profile,
    mobile_burger,
    mobile_menu,
    user,
    photo,
    name,
    role,
    active,
    main,
    close_button,
    menu,
  } = styles;

  return (
    <section className={profile}>
      <section className={mobile_burger}>
        <button onClick={() => setMenu({ marginLeft: '0' })}>
          <FaUserCircle />
        </button>
      </section>
      <section className={mobile_menu} style={menus}>
        <section className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </section>
        <button
          className={active}
          onClick={() => {
            setComponent(0), setMenu({ marginLeft: '-105%' });
          }}>
          Profile
        </button>
        <button
          onClick={() => {
            setComponent(1), setMenu({ marginLeft: '-105%' });
          }}>
          Courses
        </button>
        <button
          onClick={() => {
            setComponent(2), setMenu({ marginLeft: '-105%' });
          }}>
          Account
        </button>
        <button
          onClick={() => {
            setComponent(3), setMenu({ marginLeft: '-105%' });
          }}>
          Settings
        </button>
        <button
          className={close_button}
          onClick={() => setMenu({ marginLeft: '-105%' })}>
          <FaWindowClose />
        </button>
      </section>

      <section className={menu}>
        <section className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </section>
        <button className={active} onClick={() => setComponent(0)}>
          Profile
        </button>
        <button onClick={() => setComponent(1)}>Courses</button>
        <button onClick={() => setComponent(2)}>Account</button>
        <button onClick={() => setComponent(3)}>Settings</button>
      </section>
      <section className={main}>
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
          <SettingsTab />
        )}
      </section>
    </section>
  );
};
