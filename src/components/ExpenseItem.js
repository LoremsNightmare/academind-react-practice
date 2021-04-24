import React from 'react';

const ExpenseItem = (props) => {

  let {title, price} = props


  return (
    <div style ={{
      border: '2px solid red',
      height: '140px',
      width: '350px'
      }}>
      <h2 style={{
        fontSize: '31px'
      }}>{title}</h2>
      <p>price: {price}</p>
    </div>
  );
};

export default ExpenseItem;