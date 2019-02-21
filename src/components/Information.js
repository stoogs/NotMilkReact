import React from 'react';

const information = ( props ) => {

  //  ASSIGN VALUES TO NUTS
  //  pecan e.g.     ~20cals                       ~690cals                    ~3g        ~gramsPerLitre/1cup weight
  let pecan =     ([props.nutIndividualCalories[0],props.nut100gCalories[0],props.nutIndividualWeight[0], props.nutGramsRequiredPerLitre[0]]);
  let almond =    ([props.nutIndividualCalories[1],props.nut100gCalories[1],props.nutIndividualWeight[1], props.nutGramsRequiredPerLitre[1]]);
  let cashew =    ([props.nutIndividualCalories[2],props.nut100gCalories[2],props.nutIndividualWeight[2], props.nutGramsRequiredPerLitre[2]]);
  let pistachio = ([props.nutIndividualCalories[3],props.nut100gCalories[3],props.nutIndividualWeight[3], props.nutGramsRequiredPerLitre[3]]);
  let macadamia = ([props.nutIndividualCalories[4],props.nut100gCalories[4],props.nutIndividualWeight[4], props.nutGramsRequiredPerLitre[4]]);
  let hazelnut =  ([props.nutIndividualCalories[5],props.nut100gCalories[5],props.nutIndividualWeight[5], props.nutGramsRequiredPerLitre[5]]);
  let brazil =    ([props.nutIndividualCalories[6],props.nut100gCalories[6],props.nutIndividualWeight[6], props.nutGramsRequiredPerLitre[6]]);
  let walnut =    ([props.nutIndividualCalories[7],props.nut100gCalories[7],props.nutIndividualWeight[7], props.nutGramsRequiredPerLitre[7]]);
  let coconut =   ([props.nutIndividualCalories[8],props.nut100gCalories[8],props.nutIndividualWeight[8], props.nutGramsRequiredPerLitre[8]]);

  //  let nutGramsRequiredPerLitre = [ 125,140,150,100,134,150,133,130,80 ]
  //  CHOSEN NUT LOADED
  let chosen = almond; //default choice
        if (props.nutChoice === "Almond") { chosen = almond}
  else if (props.nutChoice === "Cashew") { chosen = cashew}
  else if (props.nutChoice === "Pecan") { chosen = pecan}
  else if (props.nutChoice === "Pistachio") { chosen = pistachio}
  else if (props.nutChoice === "Macadamia Nut") { chosen = macadamia}
  else if (props.nutChoice === "Hazelnut") { chosen = hazelnut}
  else if (props.nutChoice === "Brazil Nut") { chosen = brazil}
  else if (props.nutChoice === "Walnut") { chosen = walnut}
  else if (props.nutChoice === "Coconut") { chosen = coconut}
  
    let totalCalories = ( (chosen[1]/100 * chosen[3]) * props.consistency );  // caloriesper100g / 100 * nuts needed per litre
    let amountOfNuts = Math.floor(((props.servings*chosen[3]) / chosen[2]) * (props.consistency/4));
    let milkPercent = (props.consistency*chosen[3]/1000 * 40).toFixed(1);   // consist x nutgramsperlitre/1000 x minuspulp  1x(140/1000)*40%
    let cups = (props.servings*props.consistency/4).toFixed(2);
    let grams = Math.floor(amountOfNuts*chosen[2]);
    let nutChoice = props.nutChoice+'s';
    let cupText = 'empty CupsText';

    //  COCONUTS ARE BIG
    if (chosen===coconut) { 
      amountOfNuts = (((props.servings*chosen[3]) / chosen[2]) * (props.consistency/4)).toFixed(2); 
      grams = Math.floor(amountOfNuts*chosen[2]);
      nutChoice = 'Coconut';
    }

    // ANY ADDITIONAL CALORIES?  CALCULATED
    if (props.options[0] ? totalCalories+=20 : ''); //Add date calories
    if (props.options[1] ? totalCalories+=60 : ''); //Add honey calories
    let twofiftyml = Math.floor(totalCalories*0.4 / 4);
    let onehundredml = Math.floor((totalCalories*0.4) / 2.5 / 4);
    //  FORMATTING NICENESS
    if (cups == 1 ? cupText = cups + " cups" : cupText = cups + " cup");

  return (
    <React.Fragment>
      <div className="Information">
        <h2>Milk is <b>{milkPercent}%</b></h2>
        <h4>{grams} grams / {cupText} / {amountOfNuts} nuts</h4>
        <h5><i>250ml:</i>  <b> {twofiftyml} </b>kcal  / <i> 100ml: </i> <b> {onehundredml} </b>kcal</h5>  
        <h6><i>minus milk pulp ~40% of entire calories</i></h6>
      </div>
    </React.Fragment>
  )  
}

export default information;