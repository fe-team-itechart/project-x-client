import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import './buttons.scss';

export const Profile = () => {
  const [getComponent, setComponent] = useState(0);
  const [menus, setMenu] = useState({ marginLeft: '-105%' });

  const [getStatus, setStatus] = useState(0);

  const {
    mobile_burger,
    mobile_menu,
    user,
    photo,
    name,
    role,
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
    <>
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
            <Link to="/profile/public">
              <button
                type='button'
                className={`profile_button ${getStatus === 0? 'profile_button_active': ''}`}
                onClick={() => {
                  toggleButton(0), setMenu({ marginLeft: '-105%' });
                }}>
                Public
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile/courses">
              <button
                type='button'
                className={`profile_button ${getStatus === 1? 'profile_button_active': ''}`}
                onClick={() => {
                  toggleButton(1), setMenu({ marginLeft: '-105%' });
                }}>
                Courses
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile/account">
              <button
                type='button'
                className={`profile_button ${getStatus === 2? 'profile_button_active': ''}`}
                onClick={() => {
                  toggleButton(2), setMenu({ marginLeft: '-105%' });
                }}>
                Account
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile/settings">
              <button
                type='button'
                className={`profile_button ${getStatus === 3? 'profile_button_active': ''}`}
                onClick={() => {
                  toggleButton(3), setMenu({ marginLeft: '-105%' });
                }}>
                Settings
              </button>
            </Link>
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
              <Link to="/profile/public">
                <button 
                  type='button' 
                  className={`profile_button ${getStatus === 0? 'profile_button_active': ''}`} 
                  onClick={() => toggleButton(0)}>
                    Profile
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile/courses">
                <button 
                  type='button' 
                  className={`profile_button ${getStatus === 1? 'profile_button_active': ''}`} 
                  onClick={() => toggleButton(1)}>
                    Courses
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile/account">
                <button 
                  type='button' 
                  className={`profile_button ${getStatus === 2? 'profile_button_active': ''}`} 
                  onClick={() => toggleButton(2)}>
                    Account
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile/settings">
                <button 
                  type='button' 
                  className={`profile_button ${getStatus === 3? 'profile_button_active': ''}`} 
                  onClick={() => toggleButton(3)}>
                    Settings
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};