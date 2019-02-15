import React, { Component } from 'react';
import './App.css';

import Heading from './components/Heading';
import Logo from './components/Logo';
import Choice from './components/Choice';

class App extends Component {
  state = {
    chosen: "Choose A Nut"
  }
 
  chooseNut = (chosen) => {
    this.setState({
      chosen: chosen
    }) 
  }
  
  render() {

    return (
      <div className="App">
        {console.log(this.state.chosen)}

        <Logo>LOGO</Logo>

        <Heading chosen={this.state.chosen} />

        <Choice>
        <button onClick={this.chooseNut.bind(this, 'Pecan')}>Pecan</button>
        <button onClick={this.chooseNut.bind(this, 'Almond')}>Almond</button>
        <button onClick={this.chooseNut.bind(this, 'Cashew')}>Cashew</button>
        <button onClick={this.chooseNut.bind(this, 'Pistachio')}>Pistachio</button>
        <button onClick={this.chooseNut.bind(this, 'Macadamia Nut')}>Macadamia Nut</button>
        <button onClick={this.chooseNut.bind(this, 'Hazelnut')}>Hazelnut</button>
        <button onClick={this.chooseNut.bind(this, 'Brazil Nut')}>Brazil Nut</button>
        <button onClick={() => this.chooseNut("Walnut")}>Walnut</button> 
        </Choice>

      </div>

    );
  }
}

export default App;
