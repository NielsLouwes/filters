import "./styles.css";

export default function App() {
  const items = [
    {
      id: 1,
      name: "Niels",
      team: "red",
      age: 33
    },
    {
      id: 2,
      name: "Bob",
      team: "blue",
      age: 22
    },
    {
      id: 3,
      name: "Sharon",
      team: "yellow",
      age: 29
    },
    {
      id: 4,
      name: "Charlie",
      team: "yellow",
      age: 34
    },
    {
      id: 5,
      name: "Adam",
      team: "blue",
      age: 21
    },
    {
      id: 6,
      name: "Anita",
      team: "red",
      age: 25
    }
  ];

  return (
    <div className="App">
      <h2>Roster</h2>
      {items
        ? items.map((item) => (
            <p key={item.id}>
              {item.name} - {item.age} years old
            </p>
          ))
        : []}
    </div>
  );
}
