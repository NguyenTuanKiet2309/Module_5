import "./App.css";
import Header from "./component/navigation/Header";
import Footer from "./component/navigation/Footer";
import Nav from "./component/navigation/Nav";
import Content from "./component/navigation/Content";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Nav />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
