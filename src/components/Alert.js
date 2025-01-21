import React from "react";

export default function Alert(props){

    return(
      <div style={{display:'flex', flexDirection:'row',  width:'100%', alignItems:'center', justifyContent:'center'}}>
        <div class="alert alert-warning alert-dismissible fade show" style={{position:'absolute'}} role="alert">
        <strong>{props.message}</strong>
      </div>
      </div>
    )
}