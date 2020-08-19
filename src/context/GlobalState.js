import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const InitialState = {
  transections: []
};

//create context

export const GlobalContext = createContext(InitialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  //action
  function deleteTran(id) {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id
    });
  }

  function addTran(teansection) {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: teansection
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTran,
        addTran
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
