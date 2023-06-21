import React, { useEffect, useState } from "react";

const Total = ({ entries }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  let count = 0;

  entries.forEach((element) => {
    count += element.price;
  });

  useEffect(() => {
    setTotalPrice(count);
  }, [entries]);

  return (
    <div>
      <div>Total:{totalPrice}</div>
    </div>
  );
};

export default Total;
