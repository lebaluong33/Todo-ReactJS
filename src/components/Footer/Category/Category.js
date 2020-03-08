import React, { memo } from 'react';

const Category = (props) => {
  const { category, name, setCategory } = props;
  let upperCaseName = '';
  let lowerCase = '';
  if( name ) {
    upperCaseName = name.toUpperCase();
    lowerCase = name.toLowerCase();
  };
  return (
    <li>
    <a
      className={`${category === upperCaseName ? "selected" : ''}`}
      onClick={() => setCategory(upperCaseName)}
      href={"#/" + lowerCase} >{name}</a>
    </li>
  );
};
export default memo(Category);