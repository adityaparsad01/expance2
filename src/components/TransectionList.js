import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transection from "./Transection";

const TransectionList = () => {
  const { transections } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transections.map((data) => {
          return <Transection key={data.id} transection={data} />;
        })}
      </ul>
    </>
  );
};

export default TransectionList;
