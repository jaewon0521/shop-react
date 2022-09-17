import React from 'react';

interface props {
  totalStar?: number;
  selectedStars: number;
}

const Star = ({ totalStar = 5, selectedStars }: props) => {
  return <div></div>;
};

export default Star;
