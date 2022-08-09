import "./styles.css";
import styled from "styled-components";
import items from "./data/items";

import Dropdown from "react-bootstrap/Dropdown";

const Heading = styled.h1``;

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
      <Heading>Roster</Heading>
      <Dropdown />
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select team
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">red</Dropdown.Item>
        <Dropdown.Item href="#/action-2">yellow</Dropdown.Item>
        <Dropdown.Item href="#/action-3">red</Dropdown.Item>
      </Dropdown.Menu>
      {items
        ? items?.map((item) => (
            <p key={item.id}>
              {item.name} - {item.age} years old
            </p>
          ))
        : []}
    </div>
  );
}
