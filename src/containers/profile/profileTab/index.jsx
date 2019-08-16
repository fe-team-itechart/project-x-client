import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";

export const ProfileTab = () => {
  const [update, setUpdate] = useState(true);
  const {
    profile,
    user_fio,
    description,
    social,
    twitter_icon,
    facebook_icon,
    linkedin_icon,
  } = styles;

  return ( 
    <section className={profile}>
      <section className={user_fio}>
        <input type="text" placeholder="First name" disabled={update} defaultValue='John'/>
        <input type="text" placeholder="Last name" disabled={update} defaultValue='Doe'/>
      </section>
      <section className={description}>
        <input type="text" placeholder="Description" disabled={update} />
      </section>
      <section className={social}>
        <section>
          <span><FaTwitter className={twitter_icon}/>http://twitter.com/</span>
          <input type="text" placeholder="twitter nick" disabled={update} defaultValue='johntwitt'/>
        </section>
        <section>
          <span><FaFacebookF className={facebook_icon}/>https://www.facebook.com/</span>
          <input type="text" placeholder="facebook nick" disabled={update} defaultValue='jhondoe'/>
        </section>
        <section>
          <span><FaLinkedinIn className={linkedin_icon}/>https://www.linkedin.com/</span>
          <input type="text" placeholder="linkedin nick" disabled={update} />
        </section>
      </section>
      {update && <button onClick={() => setUpdate(!update)}>update</button>}
      {!update && (
        <>
          <button onClick={() => setUpdate(!update)}>save</button>
          <button onClick={() => setUpdate(!update)}>close</button>
        </>
      )}
    </section>
  );
}
