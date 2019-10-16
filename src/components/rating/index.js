import React from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './style.module.scss';

const handlerDefault = e => {
  e.stopPropagation();
  if (e.currentTarget.tagName === 'LABEL') {
    return false;
  }
  console.log('Default clicked')
};

export default function Rating({ rate = 0, handler = handlerDefault, votes = 100, voteAble = false}) {
  let handlerPrepared;
  if (!voteAble) {
    handlerPrepared = (e) => {
      e.preventDefault();
    }
  } else {
    handlerPrepared = handler;
  }

  const instanceId = Math.round(Math.random() * 100000);

  const rateRounded = Math.round(rate);

  const rateStars = Array(6)
    .fill(1)
    .map((el, i) => {
      const k = Math.random();
      return (
      <React.Fragment key={`rating-${k}`}>
        <label
          htmlFor={`rating-${k}`}
          className={styles.inputRateLabel}
          onClick={handlerPrepared}
          style={{ display: i == 0 ? 'none' : 'block' }}>
          <FaStar className={`${styles.starRate}`} />
        </label>
        <input
          type="radio"
          name={`rating-${instanceId}`}
          id={`rating-${k}`}
          className={styles.inputRateRatio}
          onClick={handlerPrepared}
          value={i}
          defaultChecked={i === rateRounded}
        />
      </React.Fragment>
    )});

  const classForGroup = `${voteAble && styles.rateGroupVoteAble} ${styles.rateGroup}`;
  return (
    
    <div className={classForGroup}>
      {rateStars}
      <span className={styles.rateVotes}>({votes})</span>
    </div>
    
  );
}
