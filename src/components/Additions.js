import React from 'react';

const additions  = (props) => {
    return (
        <div>
            {console.log(props.labels[0], props.options[0])}
            <label>{props.labels[0]}</label>
            <input onClick={props.additions} name={props.labels[0]} type="checkbox" />
            <br/>
            {console.log(props.labels[1], props.options[1])}
            <label>{props.labels[1]}</label>
            <input onClick={props.additions} name={props.labels[1]} type="checkbox" />
            <br/>
            {console.log(props.labels[2], props.options[2])}
            <label>{props.labels[2]} </label>
            <input onClick={props.additions} name={props.labels[2]} type="checkbox" />
            <br/>
            {console.log(props.labels[3], props.options[3])}
            <label>{props.labels[3]}</label>
            <input onClick={props.additions} name={props.labels[3]} type="checkbox" />
            <br/>
            {console.log(props.labels[4], props.options[4])}
            <label>{props.labels[4]}</label>
            <input onClick={props.additions} name={props.labels[4]} type="checkbox" />
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