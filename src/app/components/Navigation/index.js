import React from 'react'
import Drawer from 'app/components/Drawer'
import TopBar from 'app/components/TopBar'
import {Route} from 'react-router'
import { bindActionCreators } from 'redux'
import * as NavigationActions from 'app/reducers/navigation/actions'
import {connect} from 'react-redux'

const mapStateToProps = props => (
  state => (
    {
      navigation: state[props.id]
    }
  )
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(NavigationActions, dispatch)
  }
)

const Navigation = props => (
  <div className="main-navigation">
    <TopBar showMobileBurger actions={props.actions} navigation={props.navigation}/>
    <Drawer actions={props.actions} navigation={props.navigation}/>
  </div>
)

export default (props) => {
  let ConnectNavigation = connect(mapStateToProps(props), mapDispatchToProps)(Navigation)
  return <ConnectNavigation {...props}/>
}
