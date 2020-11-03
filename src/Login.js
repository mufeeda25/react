import React, { Component } from 'react';
import axios from 'axios';
import './login.css'
class Login extends Component {
  state = 
  {
    title:"Login Page",
    acno:"",
    password:"",
    showLogin:false
  }
  // usernameChange=(e)=>{
  //   this.setState({
  //     username:e.target.value,
      
  //   });
  // }
  // passwordChange=(e)=>{
  //   this.setState({
  //     password:e.target.value,
      
  //   });
  // }
  inputChange = (event)=>{
    this.setState({
  [event.target.name]:event.target.value,
      
    });
  }
  handleSubmit=(event)=>{
    alert("submit clicked");
    alert(this.state.acno+this.state.password);
  event.preventDefault();
  axios.post(process.env.REACT_APP_APP_URL+'/login',{
    acno1:this.state.acno,
    password:this.state.password
  },{
    withCredentials:true
  })
  .then(response=>{
    alert(response.data.message)
  })
  .catch(error=>{
    alert(error.response.data.message)
  });
  }
//   constructor(props){
//     super(props);
//   }
// static getDerivedStateFromProps(props,state){

// }
//   shouldComponentUpdate(){

//   }
    render(){
      if(this.state.showLogin==false){
        return(<div style={{backgroundColor:"red"}}> 
          <p>login is disabled</p>
          <button onClick={()=>{
            this.setState({
              showLogin:true
            })
          }}>Enable login</button>
        </div>)
      }
      return <div className="loginPage">
        <h1>{this.props.title} </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
          <input className="form-control" type="text" value={this.state.acno} onChange={this.inputChange} name="acno"/>
          </div>
        <div className="form-group">
          <label>password</label>
          <input  className="form-control" type="text" value={this.state.password} onChange={this.inputChange} name="password"/>

        </div>
       
        
        <input class="btn btn-primary" type="submit" value="Submit" />
        
        </form>
        </div>
      
    }
//     getSnapshotBeforeUpdate(prevProps,prevState){

//     }
//     componentDidUpdate(){

//     }
//     componentDidMount(){
// //called after after first render
//     }
//     componentWillUnmount(){
//       //this method is called when the component is about to remove from the dom
//     }
  }
  export default Login;