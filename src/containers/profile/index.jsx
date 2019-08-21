import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styles from './styles.module.scss';
import './buttons.scss';
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
    hidden_text
  } = styles;

  
  const toggleButton = (elem) => {
    setStatus(elem);
    setComponent(elem);

  }

  return (
    <section className={profile}>
      <h3 className={hidden_text}>Profile's page which include courses, settings, public profile, users's account</h3>
      <div className={mobile_burger}>
        <button type='button' onClick={() => setMenu({ marginLeft: '0' })}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </button>
      </div>
      <div className={mobile_menu} style={menus}>
        <button
          type='button'
          className={`profile_button ${getStatus === 0? 'profile_button_active': ''}`}
          onClick={() => {
            toggleButton(0), setMenu({ marginLeft: '-105%' });
          }}>
          Public
        </button>
        <button
          type='button'
          className={`profile_button ${getStatus === 1? 'profile_button_active': ''}`}
          onClick={() => {
            toggleButton(1), setMenu({ marginLeft: '-105%' });
          }}>
          Courses
        </button>
        <button
          type='button'
          className={`profile_button ${getStatus === 2? 'profile_button_active': ''}`}
          onClick={() => {
            toggleButton(2), setMenu({ marginLeft: '-105%' });
          }}>
          Account
        </button>
        <button
          type='button'
          className={`profile_button ${getStatus === 3? 'profile_button_active': ''}`}
          onClick={() => {
            toggleButton(3), setMenu({ marginLeft: '-105%' });
          }}>
          Settings
        </button>
        <button
          type='button'
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
        <button 
          type='button' 
          className={`profile_button ${getStatus === 0? 'profile_button_active': ''}`} 
          onClick={() => toggleButton(0)}>
            Profile
        </button>
        <button 
          type='button' 
          className={`profile_button ${getStatus === 1? 'profile_button_active': ''}`} 
          onClick={() => toggleButton(1)}>
            Courses
        </button>
        <button 
          type='button' 
          className={`profile_button ${getStatus === 2? 'profile_button_active': ''}`} 
          onClick={() => toggleButton(2)}>
            Account
        </button>
        <button 
          type='button' 
          className={`profile_button ${getStatus === 3? 'profile_button_active': ''}`} 
          onClick={() => toggleButton(3)}>
            Settings
        </button>
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