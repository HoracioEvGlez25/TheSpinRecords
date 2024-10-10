import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map(star => (
        <label key={star}>
          <input 
            type="radio" 
            name="rating" 
            value={star} 
            onClick={() => onRatingChange(star)} 
            style={{ display: 'none' }} 
          />
          <FaStar 
            className="star" 
            color={star <= rating ? "#ffc107" : "#e4e5e9"} 
            size={30} 
          />
        </label>
      ))}
    </div>
  );
};

export default StarRating;
