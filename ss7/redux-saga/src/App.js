import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  const handleGetUser = () => {
    dispatch(getUsers());
  }

  return (
    <div>
      <h1>User List</h1>
      <button className="btn btn-outline-success" onClick={handleGetUser}>Get users</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button className="btn btn-outline-danger" onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
