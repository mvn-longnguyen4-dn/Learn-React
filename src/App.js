import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
        </p>
      </header>
    </div>
    <Footer/>
    </>
  );
}

export default App;
