
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  };

  export const reducer = (state, action) => {
      console.log( state, action);
      switch(action, type) {
          case 'UPDATE_TODO';
          return {
              ...state, 
              item: action.payload

          };
          default:
              return state;
      }
  };