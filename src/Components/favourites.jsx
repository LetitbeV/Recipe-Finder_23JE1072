import React, { useState } from 'react';
import './favourites.css';

const favourites = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="like-checkbox">
      <input
        type="checkbox"
        id="like"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="like">
        <svg
          className={`heart ${isChecked ? 'checked' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </label>
    </div>
  );
};

export default favourites;