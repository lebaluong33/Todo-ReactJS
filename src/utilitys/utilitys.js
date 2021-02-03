export const checkSelectedAll = (list = []) => {
  return list.filter(todo => todo.isCompleted === false).length === 0;
};

export const filterTodoHandler = (list = [] , category = '') => {
  switch(category) {
    case 'ACTIVE': 
      return list.filter(item => !item.isCompleted);
    case 'COMPLETED':
      return list.filter(item => item.isCompleted);
    default: 
      return list
  };
};