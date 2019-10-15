import React from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './style.module.scss';

export default function Rating({ rate = 0, handler, votes = 100 }) {
  if (!handler) {
    handler = e => {
      e.stopPropagation();
      if (e.currentTarget.tagName === 'LABEL') {
        return false;
      }
      console.log(e.currentTarget.id);
    };
  }

  rate = Math.round(rate);

  const rateStars = Array(6)
    .fill(1)
    .map((el, i) => (
      <React.Fragment key={`rating-${i}`}>
        <label
          htmlFor={`rating-${i}`}
          className={styles.inputRateLabel}
          onClick={handler}
          style={{ display: i == 0 ? 'none' : 'block' }}>
          <FaStar className={`${styles.starRate}`} />
        </label>
        <input
          type="radio"
          name="rating"
          id={`rating-${i}`}
          className={styles.inputRateRatio}
          onClick={handler}
          value={i}
          defaultChecked={i === rate}
        />
      </React.Fragment>
    ));

  return (
    <div className={styles.rateGroup}>
      {rateStars}
      <span className={styles.rateVotes}>({votes})</span>
    </div>
  );
}
