import React from "react";
import axios from "axios";
import './Table.css';

export default class Table extends React.Component {
  state = {
    persons: [{ id: 0, name: "", username: "", email: "", phone: "" }],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (<>
      <h2>Datos de los usuarios</h2>
      <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
           {this.state.persons.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.username}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
          </tr>
        ))}
        </tbody>
      </table></>
    );
  }
}
