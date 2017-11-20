import React, {PropTypes} from 'react';
import createReactClass from 'create-react-class'
import {Link} from 'react-router';
import SubHeader from './SubHeader';

const Modal = createReactClass({
  styles: {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    padding: 20,
//     boxShadow: '#ccc 0px 0px 150px 370px',
    overflow: 'auto',
    background: 'rgb(255, 255, 255)',
    opacity: '0.5 !important'
  },

  render() {
    return (
      <div style={this.styles}>
        <p><Link to={this.props.returnTo}><i className="glyphicon glyphicon-remove"></i></Link></p>
        {this.props.children}
      </div>
    )
  }
})

Modal.propTypes = {
  children: PropTypes.object
};

export default Modal;
