import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transection = ({ transection }) => {
  const { deleteTran } = useContext(GlobalContext);
  const sign = transection.amount < 0 ? "-" : "+";
  return (
    <li className={transection.amount > 0 ? "plus" : "minus"}>
      {transection.text}
      <span>
        {sign}
        <small>$</small> {Math.abs(transection.amount)}
      </span>
      <button onClick={() => deleteTran(transection.id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

export default Transection;
