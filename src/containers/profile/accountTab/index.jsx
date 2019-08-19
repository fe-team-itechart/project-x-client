import React, { useState } from 'react';
import styles from './styles.module.scss';

export const AccountTab = () => {
  const [update, setUpdate] = useState(true);
  const {
    account,
    password,
    buttons_block,
    payment_btn,
    payment_btn_block,
  } = styles;

  return ( 
    <section className={account}>
      <section className={password}>
        <input type="text" placeholder="password" disabled={update} />
      </section>
      <section className={password}>
        <input type="text" placeholder="confirm password" disabled={update} />
      </section>
      <section className={buttons_block}>
      {update && <button onClick={() => setUpdate(!update)}>update password</button>}
      {!update && (
        <>
          <button onClick={() => setUpdate(!update)}>save</button>
          <button onClick={() => setUpdate(!update)}>close</button>
        </>
      )}
      </section>
      <section className={payment_btn_block}>
        <button className={payment_btn}>Add payment data</button>
      </section>
    </section>
  );
}
