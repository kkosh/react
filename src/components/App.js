import React, {PropTypes} from 'react';
import Header from '../Shared/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
