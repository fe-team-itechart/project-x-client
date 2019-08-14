import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";

export default function profileTab() {
  const [update, setUpdate] = useState(true);

  return ( 
    <section className={styles.profile}>
      <section className={styles.userFio}>
        <input type="text" placeholder="First name" disabled={update} defaultValue='John'/>
        <input type="text" placeholder="Last name" disabled={update} defaultValue='Doe'/>
      </section>
      <section className={styles.description}>
        <input type="text" placeholder="Description" disabled={update} />
      </section>
      <section className={styles.social}>
        <section>
          <span><FaTwitter style={{ color:'#1da1f2 '}}/>http://twitter.com/</span>
          <input type="text" placeholder="twitter nick" disabled={update} defaultValue='johntwitt'/>
        </section>
        <section>
          <span><FaFacebookF style={{ color:'#3b5998 '}}/>https://www.facebook.com/</span>
          <input type="text" placeholder="facebook nick" disabled={update} defaultValue='jhondoe'/>
        </section>
        <section>
          <span><FaLinkedinIn style={{ color:'#0073b0 '}}/>https://www.linkedin.com/</span>
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
