import Card from "../Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
      <li>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={FilterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={FilteredExpenses}/>
        <ExpensesList items={FilteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
