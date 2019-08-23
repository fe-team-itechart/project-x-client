import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styles from './styles.module.scss';
import './buttons.scss';
import { ProfileTab } from "./profileTab";
import { SettingsTab } from './settingsTab';
import { AccountTab } from './accountTab';


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

  const toggleMenu = () => {
    if(menus.marginLeft === '0'){
      setMenu({ marginLeft: '-105%' })
    }else{
      setMenu({ marginLeft: '0' })
    }
  }

  return (
    <section className={profile}>
      <h3 className={hidden_text}>Profile's page which include courses, settings, public profile, users's account</h3>
      <div className={mobile_burger}>
        <button type='button' onClick={() => toggleMenu()}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </button>
      </div>
      <nav className={mobile_menu} style={menus}>
        <ul>
          <li>
            <button
              type='button'
              className={`profile_button ${getStatus === 0? 'profile_button_active': ''}`}
              onClick={() => {
                toggleButton(0), setMenu({ marginLeft: '-105%' });
              }}>
              Public
            </button>
          </li>
          <li>
            <button
              type='button'
              className={`profile_button ${getStatus === 1? 'profile_button_active': ''}`}
              onClick={() => {
                toggleButton(1), setMenu({ marginLeft: '-105%' });
              }}>
              Courses
            </button>
          </li>
          <li>
            <button
              type='button'
              className={`profile_button ${getStatus === 2? 'profile_button_active': ''}`}
              onClick={() => {
                toggleButton(2), setMenu({ marginLeft: '-105%' });
              }}>
              Account
            </button>
          </li>
          <li>
            <button
              type='button'
              className={`profile_button ${getStatus === 3? 'profile_button_active': ''}`}
              onClick={() => {
                toggleButton(3), setMenu({ marginLeft: '-105%' });
              }}>
              Settings
            </button>
          </li>
          <li>
            <button
              type='button'
              className={close_button}
              onClick={() => setMenu({ marginLeft: '-105%' })}>
                <FaWindowClose />
            </button>
          </li>
        </ul>
      </nav>

      <div className={menu}>
        <div className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </div>
        <nav>
          <ul>
            <li>
              <button 
                type='button' 
                className={`profile_button ${getStatus === 0? 'profile_button_active': ''}`} 
                onClick={() => toggleButton(0)}>
                  Profile
              </button>
            </li>
            <li>
              <button 
                type='button' 
                className={`profile_button ${getStatus === 1? 'profile_button_active': ''}`} 
                onClick={() => toggleButton(1)}>
                  Courses
              </button>
            </li>
            <li>
              <button 
                type='button' 
                className={`profile_button ${getStatus === 2? 'profile_button_active': ''}`} 
                onClick={() => toggleButton(2)}>
                  Account
              </button>
            </li>
            <li>
              <button 
                type='button' 
                className={`profile_button ${getStatus === 3? 'profile_button_active': ''}`} 
                onClick={() => toggleButton(3)}>
                  Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={main}>
        {getComponent === 0 && <ProfileTab />}
        {getComponent === 1 && (
          <div>
            <p>Courses</p>
          </div>
        )}
        {getComponent === 2 && <AccountTab />}
        {getComponent === 3 && <SettingsTab />}
      </div>
    </section>
  );
};