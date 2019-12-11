
export const initialState ={
    items: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]}

  export const todoReducer = (state, action) => {
    switch(action.type){

        case "UPDATE_TODO":
            const newItem ={
                items : [
                    ...state.items, 
                    {
                        item:action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
            return newItem;

          case "MARK_COMPLETED":
              return{
                  ...state, 
                  items: state.items.map( el => {
                      if(el.id === action.payload){
                          return{
                              ...el,
                              completed: !el.completed
                          };
                      }
                      return el;
                  })
              };


            case "CLEAR_COMPLETED":
                return{
                    ...state, 
                    items: state.items.filter(el => {
                        return !el.completed;
                    })
                };
                default: 
                return state 
            }
    };
            
  