import React, {Component as ReactComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = name => {
  return state => {
    let result = {};
    result[name] = state[name];
    return result;
  };
};

const mapDispatchToProps = (actions) => {
  return dispatch => (
    {
      handlers: bindActionCreators(actions, dispatch)
    }
  );
}

class ComponentWrapper extends ReactComponent {
  constructor(props) {
    super(props);
    if (props.storeInjector && props.component && props.reducerObj && props.reducerObj.reducer && props.reducerObj.name) {
      props.storeInjector(props.reducerObj.name, props.reducerObj.reducer);
      this.Component = connect(
        mapStateToProps(props.reducerObj.name),
        props.reducerObj.actions ? mapDispatchToProps(props.reducerObj.actions) : null
      )(props.component);
    } else {
      this.Component = props.component
    }
  }

  render() {
    return <this.Component {...this.props}/>;
  }
}

ComponentWrapper.propTypes = {
  injectReducer: React.PropTypes.func,
  reducerObj: React.PropTypes.object
};

const reducerInjector = (props, component) => (
  <ComponentWrapper {...props} component={component}/>
);

export default reducerInjector;
