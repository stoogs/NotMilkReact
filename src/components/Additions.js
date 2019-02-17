import React from 'react';

const additions  = (props) => {
    return (
    <div>
     <input type="checkbox" name="option" value="true" onChange={props.additionsChecker(props.option)} value={props.option} />
        <button>Test</button>
        {props.children}
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