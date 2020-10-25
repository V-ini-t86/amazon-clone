// setup the data layer
// we need to track this a basket
import React from "react";
import { createContext, useReducer, useContext } from "react";
// This is data layer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
