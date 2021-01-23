import React from "react";
import "./BigImpact.css";

const BigImpact = (props) => {
  console.log(props)
  // const styleObj = {
  //   fontFamily: "Impact"
  // }
  // return <h1 style={styleObj}>BIG IMPACT</h1>
  return <h1 style={{
    color: props.color
  }} id="big-impact">{props.text}</h1>
}

export default BigImpact;
// export