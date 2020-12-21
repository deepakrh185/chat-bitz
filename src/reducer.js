export const initialstate = {
  user: null,
};

export const acitonTypes = {
  SET_USER: "SET_USER",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case acitonTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
