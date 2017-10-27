import React from 'react';


class  CarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value);
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>
                <input className="form-control txtinput" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <input className="btn btn-success txtBtn" type="submit" value="submit" />
            </div>
          </form>
      );
   }
}

export default CarPage;
