import React from 'react';

const ExpenseItem = (props) => {

  let {title, price} = props


  return (
    <div style ={{
      border: '2px solid red',
      height: 'auto',
      width: 'auto'
      }}>
      <h2 style={{
        fontSize: '31px'
      }}>{title}</h2>
      <p>price: {price}</p>
      <div>
      <p >date: {props.date.toISOString()}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;