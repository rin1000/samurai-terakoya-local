export const ColorfulMessage2 = (props) => {
    const {color,children} = props;
    const contentStyle = {
        color: color, //colorのみに省略可能
        fontSize: "18px",
        margin: 100
    };
    return (
        <p style={contentStyle}>{children}</p>
    )
}


// export const ColorfulMessage2 = ({color,children}) => {
//     const contentStyle = {
//         color: color, //colorのみに省略可能
//         fontSize: "18px",
//         margin: 100
//     };
//     return (
//         <p style={contentStyle}>{children}</p>
//     )
// }