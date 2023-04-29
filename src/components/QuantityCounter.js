import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityCounter = ({ onIncrease, onDecrease }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    onIncrease();
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      onDecrease();
    }
  };
  return (
    <div className="counter">
      <FaMinus onClick={decreaseQuantity} />
      <p>{quantity}</p>
      <FaPlus onClick={increaseQuantity} />
    </div>
  );
};
export default QuantityCounter;
