import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className = "navbar navbar-inverse">
     <div className = "container-fluid">

      <div className= "navbar-header">
        <IndexLink to = "/" className="navbar-brand" activeClassName="active">AutoNation</IndexLink>
      </div>

      <ul className="nav navbar-nav">
        <li><IndexLink to = "/" activeClassName="active"><strong> Home </strong></IndexLink></li>
        <li><Link to = "/about" activeClassName="active"><strong> About </strong></Link></li>
        <li><Link to = "/car" activeClassName="active"><strong> Car </strong></Link></li>
      </ul>

      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type = "text" className="form-control" placeholder="Search" />
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search" />
            </button>
          </div>
        </div>
      </form>
     </div>
    </nav>
  );
}

export default Header;
