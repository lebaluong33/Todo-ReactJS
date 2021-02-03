import React, { memo } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const clearCompleted = (props) => (
  <button 
    className="clear-completed" 
    onClick={props.clearCompleted}>Clear completed</button>
);

const mapDispatchToProps = dispatch => {
  return {
    clearCompleted: () => dispatch(actions.clearCompletedHandler())
  }
}

export default connect(null, mapDispatchToProps)(memo(clearCompleted));