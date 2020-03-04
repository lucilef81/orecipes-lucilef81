import data from 'src/data';

const initialState = {
  list: data,
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipes;
