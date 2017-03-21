import React from 'react';
import { Link, browserHistory } from 'react-router';

const Layout = props => {
  return(
    <div>
    <Link to={browserHistory.goBack}>Back</Link>
      {props.children}
    </div>
  )
}

export default Layout;
