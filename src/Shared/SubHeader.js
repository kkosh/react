import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const SubHeader = () => {
  return (
    <nav className = "navbar navbar-inverse">
     <div className = "container-fluid">

      <ul className="nav navbar-nav">
        <li><IndexLink to='/car/carDetails'  activeClassName="active">COLOUR</IndexLink></li>
        <li><Link to='/car/carDetails/carMake' activeClassName="active">MAKE</Link></li>
        <li><Link to='/car/carDetails/carHistory' activeClassName="active">HISTORY</Link></li>
      </ul>

     </div>
    </nav>
  );
}

export default SubHeader;
