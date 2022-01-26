import React from "react";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 295.54, date: new Date(2022, 1, 26) },
    { title: "Car Insurance", amount: 400.33, date: new Date(2022, 1, 26) },
    { title: "Feed the dog", amount: 960.66, date: new Date(2022, 2, 26) },
    { title: "Car Insurance", amount: 295.54, date: new Date(2022, 1, 26) },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let`s get started!"),
    React.createElement(Expenses, { items: expenses })
  );

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses}/>
  //   </div>
  // );
}

export default App;
