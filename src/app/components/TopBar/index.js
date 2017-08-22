import React, {Component} from 'react';
import classnames from 'classnames';

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.mobileBurger = null
    if (this.props.showMobileBurger === true) {
      this.mobileBurger = (
        <div className="menu" onClick={this.props.actions.onClickMenu}>
          <span className="fa fa-bars"></span>
          <span className="fa fa-times"></span>
        </div>
      )
    }
  }
  render() {
    const elemClass = classnames(
      'top-bar',
      {'is-open': this.props.navigation.isOpen}
    )

    const topBarRight = (
      <div className="top-bar-right">
        Right
      </div>
    )

    return (
      <div className={elemClass}>
        <div className="top-bar-left">
          {this.mobileBurger}
          <span className="title">Test</span>
        </div>
        {topBarRight}
      </div>
    )
  }
}

TopBar.propTypes = {
  actions: React.PropTypes.object,
  navigation: React.PropTypes.object
}

export default TopBar
