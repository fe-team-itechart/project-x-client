import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styles from './styles.module.scss';
import { ProfileTab } from "./profileTab";
import { SettingsTab } from './settingsTab';


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
      <div className={mobile_burger}>
        <button onClick={() => setMenu({ marginLeft: '0' })}>
          <div className={photo} />
        </button>
      </div>
      <div className={mobile_menu} style={menus}>
        <div className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </div>
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
      </div>

      <div className={menu}>
        <div className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </div>
        <button className={getStatus === 0? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(0)}>
          Profile
        </button>
        <button className={getStatus === 1? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(1)}>Courses</button>
        <button className={getStatus === 2? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(2)}>Account</button>
        <button className={getStatus === 3? 'profile_button_active profile_button': 'profile_button'} onClick={() => toggleButton(3)}>Settings</button>
      </div>
      <div className={main}>
        {getComponent === 0 && <ProfileTab />}
        {getComponent === 1 && (
          <div>
            <p>Courses</p>
          </div>
        )}
        {getComponent === 2 && (
          <p>account</p>
        )}
        {getComponent === 3 && (
          <SettingsTab />
        )}
      </div>
    </section>
  );
};