import React, { memo } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const Category = (props) => {
  const { category, name } = props;
  let upperCaseName = '';
  let lowerCaseName = '';
  if( name ) {
    upperCaseName = name.toUpperCase();
    lowerCaseName = name.toLowerCase();
  };
  return (
    <li>
    <a
      className={`${category === upperCaseName ? "selected" : ''}`}
      onClick={() => props.setCategory(upperCaseName)}
      href={"#/" + lowerCaseName}   >{name}</a>
    </li>
  );
};

const mapStateToProps = state => {
  return {
    category: state.todos.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCategory: (category) => dispatch(actions.setCategoryHandler(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Category));