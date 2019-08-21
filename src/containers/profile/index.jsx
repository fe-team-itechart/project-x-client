import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styles from './styles.module.scss';
import { ProfileTab } from "./profileTab";
import './buttons.scss';

export const Profile = () => {
  const [getComponent, setComponent] = useState(0);
  const [menus, setMenu] = useState({ marginLeft: '-105%' });

  const [getStatus, setStatus] = useState(0);

  const {
    profile,
    mobile_burger,
    mobile_menu,
    user,
    photo,
    name,
    role,
    main,
    close_button,
    menu,
  } = styles;

  
  const toggleButton = (elem) => {
    setStatus(elem);
    setComponent(elem);

  }

  return (
    <section className={profile}>
      <section className={mobile_burger}>
        <button onClick={() => setMenu({ marginLeft: '0' })}>
          <div className={photo} />
        </button>
      </section>
      <section className={mobile_menu} style={menus}>
        <section className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </section>
        <button
          className={getStatus === 0? 'profile_button_active profile_button': 'profile_button'}
          onClick={() => {
            toggleButton(0), setMenu({ marginLeft: '-105%' });
          }}>
          Public
        </button>
        <button
          className={getStatus === 1? 'profile_button_active profile_button': 'profile_button'}
          onClick={() => {
            toggleButton(1), setMenu({ marginLeft: '-105%' });
          }}>
          Courses
        </button>
        <button
          className={getStatus === 2? 'profile_button_active profile_button': 'profile_button'}
          onClick={() => {
            toggleButton(2), setMenu({ marginLeft: '-105%' });
          }}>
          Account
        </button>
        <button
          className={getStatus === 3? 'profile_button_active profile_button': 'profile_button'}
          onClick={() => {
            toggleButton(3), setMenu({ marginLeft: '-105%' });
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
        <button className={getStatus === 0? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(0)}>
          Profile
        </button>
        <button className={getStatus === 1? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(1)}>Courses</button>
        <button className={getStatus === 2? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(2)}>Account</button>
        <button className={getStatus === 3? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(3)}>Settings</button>
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
          <section>
            <p>Settings</p>
          </section>
        )}
      </section>
    </section>
  );
};