import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="counter">
      <FaPlus onClick={increaseQuantity} />
      <p>{quantity}</p>
      <FaMinus onClick={decreaseQuantity} />
    </div>
  );
};
export default QuantityCounter;
