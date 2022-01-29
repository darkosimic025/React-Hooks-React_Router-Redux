import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../Card.js";

function ExpenseItem(props) {

  let title = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
