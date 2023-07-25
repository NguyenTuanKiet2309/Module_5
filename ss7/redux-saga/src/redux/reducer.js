
const initialValue = {
  users: [],
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return { ...state, users: action.payload.users };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
};

export default userReducer;
