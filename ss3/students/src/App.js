import "./App.css";
import Students from "./components/Students";

const students = [
  { id: 1, name: "Tuấn Kiệt", age: 28, address: "Đà Nẵng" },
  { id: 2, name: "Long Vũ", age: 22, address: "Đà Nẵng" },
  { id: 3, name: "Văn Hưng", age: 19, address: "Đà Nẵng" },
];
function App() {
  return (
    <div className="App">
      <Students students={students} />
    </div>
  );
}

export default App;
