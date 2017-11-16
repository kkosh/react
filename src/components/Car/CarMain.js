import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Modal from '../../Shared/Modal';

class  CarMain extends React.Component {

  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children
    }
  }

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )
    return (
      <div>
        {isModal ?
          this.previousChildren :
          this.props.children
        }

        {isModal && (
          <Modal isOpen={true} returnTo={location.state.returnTo}>
            {this.props.children}
          </Modal>
        )}
      </div>
      );
  }
}

CarMain.propTypes = {
  children : PropTypes.object.isRequired
};

export default CarMain;
