import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Học Tiếng Anh"],
      item: "",
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Todo List</h1>
        <input
          type="text"
          defaultValue={this.state.item}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleAddItem}>
          ADD
        </button>
        <div
          className="table table-striped"
          style={{ position: "absolute", left: "50%" }}
        >
          <table>
            <thead>
              <tr>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((item) => (
                <tr>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    const newItem = event.target.value;
    this.setState({ item: newItem });
  };

  handleAddItem = () => {
    if (this.state.item !== "") {
      const newItem = this.state.list;
      newItem.push(this.state.item);
      const object = {
        list: newItem,
        item: "",
      };
      this.setState(object);
    }
  };
}

export default Todo;
