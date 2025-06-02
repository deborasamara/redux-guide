import CartActionTypes from "./action-types";

const initialState = {
  produts: [],
  produtctsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...initialState,
        produts: [...initialState.produts, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
