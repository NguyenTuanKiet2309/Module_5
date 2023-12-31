import React from "react";

class Students extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <table className="table table-striped">
        <thead style={{ color: "black" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Students;
