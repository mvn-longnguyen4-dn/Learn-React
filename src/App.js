import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Circle from './Circle.js';
import React from 'react';

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          page: 'home',
      };
  }
  handleChangePage(page) {
    this.setState({page});
  }

  render() {
      const {page} = this.state;
      const circle = {
        height : "100px",
        width : "100px",
        borderRadius : "50%",
        backgroundColor : "yellow",
    }
      return (
          <main className="App-header">
              <div className="list-btn">
                  <button onClick={() => this.handleChangePage("home")} className="home-btn">Home</button>
                  <button onClick={() => this.handleChangePage("about")} className="about-btn">About</button>
              </div>
              <ul className="list-circle">
                <li>{ page === "home" && <Circle styleCircle={circle} number={Math.floor(50)}/> }</li>
                <li>{ page === "home" && <Circle styleCircle={circle} number={Math.floor(40)}/> }</li>
                <li>{ page === "home" && <Circle styleCircle={circle} number={Math.floor(30)}/> }</li>
              </ul>
          </main>
      )
  }
}
function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
