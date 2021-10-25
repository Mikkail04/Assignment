import "./styles.css";

function createList(firstName, lastName, color) {
  return (
    <li class={color}>
      {firstName} {lastName}
    </li>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>10/25/21 Assignment: Functions</h1>
      {createList("Mikkail", "Allen", "blue")}
      {createList("Mikkail", "Allen", "red")}
    </div>
  );
}
