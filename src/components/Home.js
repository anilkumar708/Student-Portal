import React from "react";
import Pagination from "./Pagination/Pagination";
import Expenses from "./Expenses/Expenses";
import NewExpenses from "./NewExpenses/NewExpenses";
import { useState } from "react";
import CallBack from "./DexGt/CallBack.jsx";
import Chat from "./DexGt/Chat";
import Message from "./DexGt/Message";
import Board from "./TicToc/Button.tsx";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 345.56,
    date: new Date(2022, 9, 20),
  },
  {
    id: "e2",
    title: "Life Insurance",
    amount: 785.56,
    date: new Date(2021, 9, 20),
  },
];

const Toolbar = (props) => {
  return <Message onClick={props.changeTheme}>Change Theme</Message>;
};

const Home = () => {
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);
  // if (!authenticated) {
  // return <Navigate replace to="/login" />;
  // Redirect
  // } else {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="home">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <CallBack />
      <Chat />
      <Expenses items={expenses} />
      <Pagination />
      <Board />
    </div>
  );
};

export default Home;
