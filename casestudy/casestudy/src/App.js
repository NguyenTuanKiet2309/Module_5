import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
     <div>
      <Header />
      <Content/>
      <Footer />
    </div>
    </div>
  );
}

export default App;
