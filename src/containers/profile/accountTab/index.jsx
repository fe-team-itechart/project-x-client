import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Profile } from '../profile';

export const AccountTab = () => {
  const [update, setUpdate] = useState(true);
  const {
    account,
    password,
    buttons_block,
    payment_btn,
    payment_btn_block,
  } = styles;

  const updatePassword = () => {
    setUpdate(!update);
  }

  return ( 
    <>
      <Profile />
      <div className={account}>
        <form>
          <div className={password}>
            <input type="text" placeholder="password" disabled={update} />
          </div>
          <div className={password}>
            <input type="text" placeholder="confirm password" disabled={update} />
          </div>
          <div className={buttons_block}>
            {update && <button onClick={updatePassword}>update password</button>}
            {!update && (
              <>
                <button type='submit'  onClick={updatePassword}>save</button>
                <button type='button' onClick={updatePassword}>close</button>
              </>
            )}
          </div>
        </form>
        <div className={payment_btn_block}>
          <button type='button' className={payment_btn}>Add payment data</button>
        </div>
      </div>
    </>
  );
}
