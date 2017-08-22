import React from 'react'
import { bindActionCreators } from 'redux'
import * as CounterActions from 'app/reducers/counter/actions'
import {connect} from 'react-redux'
import ldomingos from 'assets/ldomingos.jpg'

const mapStateToProps = state => (
  {
    counter: state.counter
  }
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(CounterActions, dispatch)
  }
)

const Luis = props => (
  <div className='luis'>
    <h1>
      Luis Counter
    </h1>
    <button onClick={props.actions.removeFromCounter} className='counter-btn'>-</button>
    <button onClick={props.actions.addToCounter} className='counter-btn'>+</button>
    <br/>
    {
      [...Array(props.counter.counter)].map(
        (x, i) => (
          <div className='image-container' key={i}>
            <div className='background' style={{opacity: i / 10}}></div>
            <img className='the-face' src={ldomingos}/>
          </div>
        )
      )
    }
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Luis)
