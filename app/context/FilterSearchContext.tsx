"use client";

import { createContext, useContext, useReducer } from "react";

type State = {
  data: {
    name: string;
    flag: string;
    population: string;
    region: string;
    capital: string;
  }[];
  searchValue: string;
  filterValue: string;
};

type Action =
  | { type: "SET_SEARCH_VALUE"; payload: string }
  | { type: "SET_FILTER_VALUE"; payload: string }
  | {
      type: "SET_DATA";
      payload: {
        name: string;
        flag: string;
        population: string;
        region: string;
        capital: string;
      }[];
    };

const initialState: State = {
  data: [],
  searchValue: "",
  filterValue: "",
};

export const FilterSearchContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

type FilterSearchContextProviderProps = {
  children: React.ReactNode;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "SET_FILTER_VALUE":
      return { ...state, filterValue: action.payload };
    default:
      return state;
  }
}

export default function FilterSearchContextProvider({
  children,
}: FilterSearchContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterSearchContext.Provider>
  );
}

export function useFilterSearchContext() {
  return useContext(FilterSearchContext);
}
