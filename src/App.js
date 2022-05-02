import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login'
import FunctionalTest from './FunctionalTest';
import List from './List'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hello world
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render(){
    return (<BrowserRouter>
    <div style={{color:"red"}}>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/functional-test">FunctionalTest</Link>
      <br/>
      <Link to="/list">List</Link>
<Switch>
<Route path="/Login">
<Login title="Login Page from prop"/>
</Route>
<Route path="/functional-test">
<FunctionalTest title="functional title" />
</Route>
<Route path="/list">
<List/>
</Route>
      
    
</Switch>
     
    </div>
    </BrowserRouter>)
  }
}

export default App;
