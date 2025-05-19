import { useState } from "react";
import "./App.css";

function TodoList() {
  const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "wash the dishes", id: crypto.randomUUID() },
    { task: "sexual intercourse w/ Robyn", id: crypto.randomUUID() },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function Button({ text, color, fontSize }) {
  const [timesClicked, setTimesClicked] = useState(0);

  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  const handleClick = () => {
    setTimesClicked(timesClicked + 1);
  };

  return (
    <>
      <p>Clicked {timesClicked} times</p>
      <button style={buttonStyle} onClick={handleClick}>
        {text}
      </button>
    </>
  );
}

function App() {
  const animals = ["Lion", "Snake", "Frog", "Giraffe", "Pig", "Lizard"];

  return (
    <div>
      <h1>My favorite animals</h1>
      <List animals={animals} />
      <Button text="click me!" color="red" fontSize="16" />
      <Button text="winner" color="green" fontSize="12" />
    </div>
  );
}

export default App;
