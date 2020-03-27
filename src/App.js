import React from 'react';
import Table from './Table';
import Form from './Form';
class App extends React.Component {
  state = { person: [] };

  handleSubmit = props => {
    this.setState({ person: [...this.state.person, props] });
  };

  removePerson = index => {
    const { person } = this.state;

    this.setState({
      person: person.filter((oneperson, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="container">
        <Table person={this.state.person} removePerson={this.removePerson} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
