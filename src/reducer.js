export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "ADD_TO_BASKET":
      //Logic for add to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //Logic for removing add to basket
      let newBasket = state.basket;
      const index = newBasket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("hello");
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
}
export default reducer;
