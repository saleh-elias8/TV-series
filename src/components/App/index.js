import React, {Component} from 'react';
import Main from '../Main';
import Series from '../../containers/Series';
import './App.css';
import "whatwg-fetch";


class App extends Component{
  render() {
    return(
    <div className="App">
    <header className="App-header">
      <h1>TV Series</h1>
    </header>
    
    <Series/>
    
  </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>TV Series</h1>
//       </header>
//       <Intro/>
//       <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//     </div>
//   );
// }

export default App;
