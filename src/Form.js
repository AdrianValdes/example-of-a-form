import React from 'react';

class Form extends React.Component {
  initialState = { name: '', job: '' };
  state = this.initialState;

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submitForm = event => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    return (
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.onChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.onChange}
        />
        <input type="button" value="submit" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
