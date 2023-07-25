import axios from "axios";
import { getUser } from "../service/UserService";

export const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: { users },
});

export const deleteUserSuccess = (userId) => ({
  type: "DELETE_USER_SUCCESS",
  payload: { userId },
});

export const getUsers = () => {
  return async (dispatch) => {
    const users = await getUser();
    dispatch(getUsersSuccess(users));
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    await axios.delete(`/user/${userId}`);
    dispatch(deleteUserSuccess(userId));
    alert(`Delete user success`);
  };
};
