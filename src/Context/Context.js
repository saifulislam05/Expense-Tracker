import { createContext, useContext, useReducer } from "react";

const ExpenseTrackerContext = createContext();


const initialState = {
  transactions: [
    { id: 1, type: "expense", amount: 100, category: "Mobile", date: "01/19/2024" },
    { id: 2, type: "income", amount: 200, category: "Salary", date: "01/19/2024" },
  ],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      };
    default:
      return state;
  }
};

const ExpenseTrackerProvider = ({ children }) => {

    const [expenseState, expenseDispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseTrackerContext.Provider
      value={{expenseState,expenseDispatch}}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export const useTransactions = () => {
  const contextValue = useContext(ExpenseTrackerContext);
  return contextValue;
};


export default ExpenseTrackerProvider;


