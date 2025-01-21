import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Input(props){

    return(
        <div style={{width:'100%'}}>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">{props.text}</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} style={{borderRadius:0}} value={props.value} onChange={props.onChange}/>
      </div>
      </div>
    )
}