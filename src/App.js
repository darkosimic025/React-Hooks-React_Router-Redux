import React, {useState} from "react";
// import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const InitializeExtenses = [
  {id: "1", title: "Car Insurance", amount: 295.54, date: new Date(2021, 1, 26) },
  {id: "2",  title: "Car Insurance", amount: 400.33, date: new Date(2022, 1, 26) },
  {id: "3",  title: "Feed the dog", amount: 960.66, date: new Date(2020, 2, 26) },
  {id: "4",  title: "Car Insurance", amount: 295.54, date: new Date(2020, 1, 26) },
];

function App() {

  const [expenses, setExpenses] = useState(InitializeExtenses)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
  })
}


  return (
    <div>
      <NewExpense funkcija={addExpenseHandler }/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
