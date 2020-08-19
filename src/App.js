import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExp from "./components/IncomeExp";
import TransectionList from "./components/TransectionList";
import AddTransection from "./components/AddTransection";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExp />
        <TransectionList />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}
