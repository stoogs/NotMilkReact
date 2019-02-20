import React from 'react';

const additions  = (props) => {
    return (
        <div className="Additions">
            <div className="AddLabels">
                <label>{props.labels[0]}</label>
                <input onClick={props.additions} name={props.labels[0]} type="checkbox" />
            </div>
            <div className="AddLabels">
                <label>{props.labels[1]}</label>
                <input onClick={props.additions} name={props.labels[1]} type="checkbox" />
            </div>
            <div className="AddLabels">
                <label>{props.labels[2]} </label>
                <input onClick={props.additions} name={props.labels[2]} type="checkbox" />
            </div>
            <div className="AddLabels">
                <label>{props.labels[3]}</label>
                <input onClick={props.additions} name={props.labels[3]} type="checkbox" />
            </div>
            <div className="AddLabels">
                <label >{props.labels[4]}</label>
                <input onClick={props.additions} name={props.labels[4]} type="checkbox" />
            </div>
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