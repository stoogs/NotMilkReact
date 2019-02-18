import React from 'react';

const information = ( props ) => {
        //pecan               ~20cals                    ~690cals                      ~3g        ~gramsPerLitre
    let pecan =     ([props.nutIndividualCalories[0],props.nut100gCalories[0],props.nutIndividualWeight[0], 125]);
    let almond =    ([props.nutIndividualCalories[1],props.nut100gCalories[1],props.nutIndividualWeight[1], 140]);
    let cashew =    ([props.nutIndividualCalories[2],props.nut100gCalories[2],props.nutIndividualWeight[2], 150]);
    let pistachio = ([props.nutIndividualCalories[3],props.nut100gCalories[3],props.nutIndividualWeight[3], 100]);
    let macadamia = ([props.nutIndividualCalories[4],props.nut100gCalories[4],props.nutIndividualWeight[4], 134]);
    let hazelnut =  ([props.nutIndividualCalories[5],props.nut100gCalories[5],props.nutIndividualWeight[5], 150]);
    let brazil =    ([props.nutIndividualCalories[6],props.nut100gCalories[6],props.nutIndividualWeight[6], 133]);
    let walnut =    ([props.nutIndividualCalories[7],props.nut100gCalories[7],props.nutIndividualWeight[7], 130]);
    // let nutGramsRequiredPerLitre = [ 125,140,150,100,134,150,133,130 ]

    let chosen = almond;

         if (props.nutChoice === "Almond") { chosen = almond}
    else if (props.nutChoice === "Cashew") { chosen = cashew}
    else if (props.nutChoice === "Pecan") { chosen = pecan}
    else if (props.nutChoice === "Pistachio") { chosen = pistachio}
    else if (props.nutChoice === "Macadamia Nut") { chosen = macadamia}
    else if (props.nutChoice === "Hazelnut") { chosen = hazelnut}
    else if (props.nutChoice === "Brazil Nut") { chosen = brazil}
    else if (props.nutChoice === "Walnut") { chosen = walnut}
  
    let totalCalories = ( (chosen[1]/100 * chosen[3]) * props.consistency )  // caloriesper100g / 100 * nuts needed per litre
    let perServing = totalCalories 
    let amountOfNuts = ((props.servings*chosen[3]) / chosen[2]) * (props.consistency/4);
    let milkPercent = props.consistency*chosen[3]/1000 * 40   // consist x nutgramsperlitre/1000 x minuspulp  1x(140/1000)*40%
    
    console.log("AON", amountOfNuts)
    console.log("Total Calories",totalCalories)
    console.log("milk percent",milkPercent)
  return (
    <>
      <h1>Information</h1>
      <h3>{Math.floor(amountOfNuts*chosen[2])} grams of {props.nutChoice}s needed or {props.servings*props.consistency/4} cups or {Math.floor(amountOfNuts)} nuts.</h3>
      
      <h3>Milk is {milkPercent.toFixed(1)}%</h3>
      <h4>Per 250ml: {Math.floor(perServing*0.4 / 4)}kcal</h4>  
      <h4>Per 100ml: {(Math.floor((perServing*0.4) / 2.5 / 4))}kcal</h4>
      <h6>minus pulp milk equates to around 40% of entirecalories</h6>
    </>
  )  
}

// servings={this.state.servings} 
//                       consistency={this.state.consistency} 
//                       nutChoice={this.state.nutChoice}
//                       nutIndividualCalories={this.state.nutIndividualCalories} 
//                       nut100gCalories={this.state.nut100gCalories} 
//                       nutIndividualWeight={this.state.nutIndividualWeight} />

//       - 1 cup pecans     = 125g TO 4 Cups water 1l - 3g   ea - 42
//       - 1 cup almonds    = 140g TO 4 Cups water 1l - 1.2g ea - 116
//       - 1 cup cashews    = 150g TO 4 Cups water 1l - 3g   ea - 50
//       - 1 cup pistachios = 100g TO 4 Cups water 1l - 3g   ea - 33
//       - 1 cup macadamia  = 134g TO 4 Cups water 1l - 2.8g ea - 47
//       - 1 cup hazelnut   = 150g TO 4 Cups water 1l - 1.4g ea - 107
//       - 1 cup brazil nut = 133g TO 4 Cups water 1l - 5g   ea - 26
//       - 1 cup walnut     = 130g TO 4 Cups water 1l - 4g   ea - 32
export default information;