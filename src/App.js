import React, { Component } from 'react';
import './App.css';

import Heading from './components/Heading';
import Logo from './components/Logo';
import Choice from './components/Choice';
import Servings from './components/Servings';
import Consistency from './components/Consistency';
import Additions from './components/Additions';

class App extends Component {
  state = {
    chosen: "Choose A Nut",
    servings: 4,
    consistency: 4,
    option0: false,   //date
    option1: false,   //vanilla
    option2: false,   //honey
    option3: false,   //cinammon
    option4: false,   //cardamon
  }

  chooseNut = (chosen) => {
    this.setState({
      chosen: chosen
    }) 
  }
  
  servingSizeHandler = (event) => {
    this.setState( {
          servings: event.target.value
    })
  }

  consistencyHandler = (event) => {
    this.setState( {
          consistency: event.target.value
    })
  }

  handleFormSubmit = (event) => {
       console.log( event.target.checked)
  }
 

  render() {

    return (
      <div className="App">
        {console.log(this.state.option0, this.state.option1)}
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
        </Choice>

        <Servings servings={this.state.servings} servingSize={this.servingSizeHandler}>
        <p>Servings {this.state.servings}</p>
        </Servings> 
        <Consistency consistency={this.state.consistency} consistencyValue={this.consistencyHandler}>
        <p>Consistency {this.state.consistency}</p>
        </Consistency> 
       
        <Additions  label={"date"} option={this.state.option0}  additionsChecker={this.handleFormSubmit}/>
        <Additions  label={"honey"}option={this.state.option1}  additionsChecker={this.handleFormSubmit}/>



 </div>
    );
  }
}

export default App;
