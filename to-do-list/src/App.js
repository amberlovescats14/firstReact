import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UniqueId from 'react-html-id'

class App extends Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      toDos: [],
      id: 0,
      title: 'To Do List',
      typing: false,
      userHasClicked: 0,
      inputValue: ' ',
      showLi : false
    }
  }
  handleInput = (e) =>{
    // console.log(e.target.value)
    this.message(e)
    this.setState({inputValue: e.target.value})
  }
  message = () =>{
    this.setState({typing: !this.state.typing})
  }
  handleClick = (e) => {
    this.setState({userHasClicked: this.state.userHasClicked + 1});

    this.state.toDos.push(this.state.inputValue);

    this.setState({inputValue: ' '});

    this.setState({typing: false});

  }
  handleDelete = (e) => {
    let button = e.target;
    {
     button.parentElement.remove(this)
    }
  }



  render() {
    let message;
    if(this.state.typing){
      message = "typing..."
    } else {
      message = ''
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://austincodingacademy.com/assets/images/logo-aca-white.png "className="App-logo" alt="logo" />
          <h1>To Do List</h1>
          <h4>{message}</h4>
          <input type='text' onChange={this.handleInput } value={this.state.inputValue}/>
          <p className='list'>
            <code>src/App.js</code> 
          </p>
          <button className="add" onClick= {this.handleClick} >Add </button>
          <ol>
          {this.state.toDos.map((item)=>{
            return <li className='li'>{item.toUpperCase()} 
            
            <button className="x" onClick={this.handleDelete}>X</button></li>

          })}
          </ol>
        </header>
      </div>
    );
  }
}
// ReactDOM.render(
//   <div>
// <App title='To Do List' />
// </div>,
//  document.getElementById('root'))

export default App;
