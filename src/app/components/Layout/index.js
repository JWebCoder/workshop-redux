import React from 'react';
import Navigation from 'app/components/Navigation';
import Container from 'app/container';

const Layout = props => (
  <div>
    <Navigation/>
    <div className="main-container">
      <Container/>
    </div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node
};

export default Layout;
