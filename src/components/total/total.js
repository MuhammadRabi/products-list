import React from "react";

const Total = ({ items, grandTotal }) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += parseFloat(items[i].price);
  }
  return (
    <div>
      {/*       <p className="text">Total Price: {total}</p>
       */}{" "}
      <p className="text">Grand Total Price: {grandTotal}</p>
    </div>
  );
};

export default Total;
