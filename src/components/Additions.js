import React from 'react';

const additions  = (props) => {
    return (
        <div>
            {console.log(props.label[0], props.options[0])}
            <label>{props.label[0]}</label>
            <input onClick={props.additions} name={props.label[0]} type="checkbox" value={props.option}  />
            <br/>
            {console.log(props.label[1], props.options[1])}
            <label>{props.label[1]}</label>
            <input onClick={props.additions} name={props.label[1]} type="checkbox" value={props.option}   />
            <br/>
            {console.log(props.label[2], props.options[2])}
            <label>{props.label[2]} </label>
            <input onClick={props.additions} name={props.label[2]} type="checkbox" value={props.option}  />
            <br/>
            {console.log(props.label[3], props.options[3])}
            <label>{props.label[3]}</label>
            <input onClick={props.additions} name={props.label[3]} type="checkbox" value={props.option}  />
            <br/>
            {console.log(props.label[4], props.options[4])}
            <label>{props.label[4]}</label>
            <input onClick={props.additions} name={props.label[4]} type="checkbox" value={props.option}  />
            </div>
    )
}



export default additions;




// import React from 'react';

// class SelectBoardSize extends React.Component {
//     buildOptions() {
//         var arr = [];

//         for (let i = 1; i <= 10; i++) {
//             arr.push(<option key={i} value="{i}">{i}</option>)
//         }

//         return arr; 
//     }

//     render() {
//         return (
//             <select className="select-board-size">
//                 {this.buildOptions()}
//             </select>
//         );
//     }
// }

// export default SelectBoardSize;