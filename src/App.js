import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Hook from './Hook';
import React from 'react';

class Main extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         page: 'home',
  //     };
  // }
  // handleChangePage(page) {
  //   this.setState({page});
  // }

  // render() {
  //     const {page} = this.state;
  //     const circle = {
  //       height : "100px",
  //       width : "100px",
  //       borderRadius : "50%",
  //       backgroundColor : "yellow",
  //   }
  //     return (
  //         <main className="App-header">
  //             <div className="list-btn">
  //                 <button onClick={() => this.handleChangePage("home")} className="home-btn">Home</button>
  //                 <button onClick={() => this.handleChangePage("about")} className="about-btn">About</button>
  //             </div>
  //             <ul className="list-circle">
  //               <li>{ page === "home" && <Circle styleCircle={circle} number={Math.floor(50)}/> }</li>
  //               <li>{ page === "home" && <Circle styleCircle={circle} number={Math.floor(40)}/> }</li>
  //               <li>{ page === "home" && <Circle styleCircle={circle} number={Math.floor(30)}/> }</li>
  //             </ul>
  //         </main>
  //     )
  // }


//   constructor(props) {
//     super(props);
//     this.state = {
//         'items' : [
//             {
//                 'id' : 1,
//                 'bg' : 'red',
//                 'ttl' : 'Bánh',
//                 'txt' : '10.000 đ'
//             },
//             {
//                 'id' : 2,
//                 'bg' : 'yellow',
//                 'ttl' : 'Kẹo',
//                 'txt' : '5.000 đ'
//             },
//             {
//                 'id' : 3,
//                 'bg' : 'orange',
//                 'ttl' : 'Mứt',
//                 'txt' : '50.000 đ'
//             },
//             {
//                 'id' : 4,
//                 'bg' : 'green',
//                 'ttl' : 'Chè',
//                 'txt' : '20.000 đ'
//             },
//             {
//                 'id' : 5,
//                 'bg' : 'blue',
//                 'ttl' : 'Trái Cây',
//                 'txt' : '100.000 đ'
//             },
//         ]
//     }
// }
render() {
    // const {items} = this.state;
    return (
        <div className="App-header">
            <Hook/>
        </div>
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
