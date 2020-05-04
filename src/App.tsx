import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import FC from './FC';
import Hooks from './Hooks';

interface State {
  x: number;
}

// <{}, State> = Props の型, State の型
class App extends React.Component<{}, State>  {
  // state = {
  //   x : 0
  // }
  constructor(props: any) {
    super(props);
    this.state = {
      x: 0
    }
  }
  // getInitialState() {
  //   return {
  //     x: 0,
  //   }
  // }

  onClick = () => {
    // const x = this.state.x;
    this.setState((
      { x: this.state.x + 1}
    ));
  }

  onClick2() {
    this.setState((
      { x: this.state.x + 2}
    ));

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.......3
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <div>
            <button onClick={this.onClick}>+1</button>
            <button onClick={this.onClick2.bind(this)}>+2</button>
            { this.state.x }
          
          </div>
          <div className='app-hooks'>
            <Hooks/>
          </div>

          <div>
            <Sample x={this.state.x}/>
          </div>
          <div>
            <FC title={"aaaa"}/>
          </div>

        </header>
      </div>
    );
      
  }
}

export default App;
