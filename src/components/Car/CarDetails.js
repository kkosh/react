import React, {PropTypes} from 'react';
import SubHeader from '../../Shared/SubHeader';
import Modal from '../../Shared/Modal';


class CarDetails extends React.Component {

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
      <div>
        {isModal ?
          this.previousChildren :
          this.props.children
        }

          <Modal isOpen={true} returnTo="/car">
            <SubHeader />
            {this.props.children}
          </Modal>
      </div>
    </div>
    );
  }
}

CarDetails.propTypes = {
  children: PropTypes.object
};

export default CarDetails;
