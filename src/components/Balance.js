import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transections } = useContext(GlobalContext);
  const amount = transections.map((data) => data.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="history">
      <h4>Your Balance</h4>
      <h1 className={total >= 0 ? "plus" : "minus"}>
        <small>$</small> {total}
      </h1>
    </div>
  );
};

export default Balance;
