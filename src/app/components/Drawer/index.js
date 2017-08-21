import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import reducerInjector from 'helpers/reducerInjector';

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elemClass = classnames(
      'drawer',
      {'is-open': this.props.navigation.isOpen}
    );

    const lockerClass = classnames(
      'drawer-locker',
      {'is-open': this.props.navigation.isOpen}
    );

    return (
      <div>
        <div className={lockerClass} onClick={() => this.props.handlers.onCloseMenu()}></div>
        <div className={elemClass}>
          <ul className="nav-items">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={() => this.props.handlers.onCloseMenu()}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={() => this.props.handlers.onCloseMenu()}>About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  handlers: React.PropTypes.object,
  navigation: React.PropTypes.object
};

export default props => (
  reducerInjector(props, Drawer)
);
