import React from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>name</th>
        <th>job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.person.map((person, index) => {
    return (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.job}</td>
        <button
          onClick={() => {
            props.removePerson(index);
          }}
        >
          Delete
        </button>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends React.Component {
  render() {
    const { person } = this.props;
    return (
      <table>
        <TableHead />
        <TableBody person={person} removePerson={this.props.removePerson} />
      </table>
    );
  }
}

export default Table;
