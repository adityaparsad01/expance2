import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransection = () => {
  const { addTran } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransection = {
      id: Math.floor(Math.random() * 1000000000000),
      text,
      amount: +amount
    };
    addTran(newTransection);
  };

  return (
    <>
      <h3>Add New Transection</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">
            Amount <br />
            (Nagative - Expance Positive - Income)
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount ..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transection</button>
      </form>
    </>
  );
};

export default AddTransection;
