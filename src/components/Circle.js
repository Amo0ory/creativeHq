import React from "react";

const Circle = ({link, title }) => {
//   const styles = {
//     height: "80px",
//     width: "80px",
//     borderRadius: "0px",
//     backgroundColor: "white",
//     alignItems: "center",
//     alignContent:'center',
//     alignSelf:'center',
//     justifyContent: "center",
//     display: "flex",
//     flexDirection:'column',
//     borderRadius: "40px",
//     fontSize:'12px',
//     textAlign:'center',
    
//   };
  return <div className='circles' ><a href={`${link}`}  style={{textDecoration:'none', color:'black'}} alt='image' target="_blank">{title}</a></div>;
};

export default Circle;
