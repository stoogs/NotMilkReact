import React, { Component } from 'react';
import './App.css';

import Heading from './components/Heading';
import Logo from './components/Logo';
import Choice from './components/Choice';
import Information from './components/Information';
import Servings from './components/Servings';
import Consistency from './components/Consistency';
import Additions from './components/Additions';

class App extends Component {
  state = {
    nutNames: ['Pecan','Almond','Cashew','Pistachio','Macadamia Nut','Hazelnut','Brazil Nut', 'Walnut', 'Coconut'],
    nutCostPer100g: [1.49, 0.92, 0.86, 0.80, 10, 1,49, 1,10, 1.40, 0.85],
    nutIndividualCalories: [20, 7, 16, 3, 19, 9, 32, 26, 1049],
    nut100gCalories: [690, 622, 584, 560, 718, 655, 687, 654, 353],
    nutIndividualWeight: [3, 1.2 ,3 ,0.7 ,2.8,  1.4 , 5 , 4, 300],
    nutGramsRequiredPerLitre: [125, 140, 150, 100, 134, 150, 133, 130, 80],
    chosen: "(Default) Almond",
    servings: 4,
    consistency: 1,
    additionsNames: ["Dates","Honey","Vanilla","Cinammon","Cardamon"],
    additionsCalories: 0,
    option0: false,   //date
    option1: false,   //vanilla
    option2: false,   //honey
    option3: false,   //cinammon
    option4: false,   //cardamon
  }

  chooseNut = (chosen) => { this.setState({ chosen: chosen }) }
  
  servingSizeHandler = (event) => { this.setState({ servings: event.target.value }) }

  consistencyHandler = (event) => { this.setState({ consistency: event.target.value })  }

  additionsHandler = (event) => 
    {
           if(event.target.name===this.state.additionsNames[0]) {this.setState({ option0: event.target.checked})}
      else if(event.target.name===this.state.additionsNames[1]) {this.setState({ option1: event.target.checked})}
      else if(event.target.name===this.state.additionsNames[2]) {this.setState({ option2: event.target.checked})}
      else if(event.target.name===this.state.additionsNames[3]) {this.setState({ option3: event.target.checked})}
      else if(event.target.name===this.state.additionsNames[4]) {this.setState({ option4: event.target.checked})} 
  }
    

  render() {

    return (
  
      <div className="App">
    
        <Logo height="10%"/>

        <Heading chosen={this.state.chosen} />

        <Choice>
          <a><img src={require("../src/Media/svg/WithoutShells/pecan.svg")} alt='Pecan' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[0])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/almond.svg")} alt='Almond' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[1])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/cashew.svg")} alt='Cashew' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[2])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/pistachio.svg")} alt='Pistachio' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[3])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/macadamia.svg")} alt='Macadamia' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[4])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/hazelnut.svg")} alt='Hazelnut' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[5])}/></a>
          <a><img src={require("../src/Media/svg/WithoutShells/brazil.svg")} alt='Brazil' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[6])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/walnut.svg")} alt='Walnut' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[7])} /></a>
          <a><img src={require("../src/Media/svg/WithoutShells/coconut.svg")} alt='Coconut' height="50px" onClick={this.chooseNut.bind(this, this.state.nutNames[8])} /></a>
        </Choice>

        <Information  servings={this.state.servings} 
                      consistency={this.state.consistency} 
                      nutChoice={this.state.chosen}
                      nutIndividualCalories={this.state.nutIndividualCalories} 
                      nut100gCalories={this.state.nut100gCalories} 
                      nutIndividualWeight={this.state.nutIndividualWeight}
                      nutGramsRequiredPerLitre={this.state.nutGramsRequiredPerLitre}
                      options={ [this.state.option0,this.state.option1,this.state.option2, this.state.option3,this.state.option4] }
                      />
   
        <Servings servings={this.state.servings} servingSize={this.servingSizeHandler}>
          <p>Servings {this.state.servings}</p>
          <p>{this.state.servings * 0.25} l / {this.state.servings} cup(s)</p>
        </Servings> 
        
        <Consistency consistency={this.state.consistency} consistencyValue={this.consistencyHandler}>
          <p>Consistency {this.state.consistency}x</p>
        </Consistency> 

        <Additions  
          labels={this.state.additionsNames}  
          options={ [this.state.option0,this.state.option1,this.state.option2, this.state.option3,this.state.option4] }
          additions={this.additionsHandler}>
        </Additions>

        {console.clear()}
        
  </div>
    );
  }
}

export default App;
