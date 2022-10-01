import React from 'react';

interface IProps {
  count: string;
}

const CountButton = ({ count }: IProps) => {
  return (
    <div className="card-actions">
      <div className="btn-group">
        <button className="btn btn-primary">-</button>
        <button className="btn btn-ghost no-animation">{count}</button>
        <button className="btn btn-primary">+</button>
      </div>
    </div>
  );
};

export default CountButton;
