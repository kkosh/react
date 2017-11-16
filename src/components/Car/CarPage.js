import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Modal from '../../Shared/Modal';

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
        <div>
          <div className="navIcon">
            <Link to={{
                pathname: '/car/carDetails',
                state: { modal: true, returnTo: this.props.location.pathname }
              }} activeClassName="active"><strong><i className="glyphicon glyphicon-book"></i></strong>
            </Link>
          </div>
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>
                <div className="carLabel"><strong><h1>What's your favorite Car? </h1></strong></div>
                <input className="form-control txtinput" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className="btn btn-success txtBtn" type="submit" value="submit" />
            </div>
          </form>
        </div>
      );
   }
}

export default CarPage;
