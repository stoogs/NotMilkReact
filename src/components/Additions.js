import React from 'react';

const additions  = (props) => {
    return (
        <form name="additionsForm"> 
            {/* <input type="checkbox" onClick={props.additionsChecker}  /> */}
            <label>{props.label}</label>
            <input type="checkbox" onClick={(event) => console.log(event.target.checked)}  />
        </form>
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