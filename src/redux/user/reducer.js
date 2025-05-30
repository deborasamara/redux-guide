const initialState = {
    currentUser: null,
};
const userReducer = (state = initialState, action) => {
    if(action.type === 'user/login'){
        return {...state, currentUser: 10};
    }
    return state;
};

// App.js
// -> despacha uma action  

export default userReducer;
