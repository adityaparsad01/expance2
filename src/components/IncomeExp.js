import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExp = () => {
  const { transections } = useContext(GlobalContext);

  const amount = transections.map((data) => data.amount);
  const income = Math.abs(
    amount
      .filter((data) => data > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
  );
  const expance = Math.abs(
    amount
      .filter((data) => data < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">$ {income}</p>
      </div>
      <div className="">
        <h4>Expance</h4>
        <p className="money minus">$ {expance}</p>
      </div>
    </div>
  );
};

export default IncomeExp;
