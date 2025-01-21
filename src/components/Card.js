import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { colors } from "../assets/Data";

export default function Card(props) {

  return (
    <div>
      <div class="card" className="w-full rounded-md border flex flex-col items-center">
        <img src={props.image} class="card-img-top" alt="..." className="w-[95%] h-[120px] self-center mt-[2%] rounded-sm" />
        <div class="card-body" className="w-full items-center flex flex-col">
          <h5 class="card-title" className="w-[90%]">{props.title}</h5>
          <p class="card-text" className="w-[90%]">{props.detail}</p>
        </div> 
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5>Price: {props.price}/Rs</h5></li>
          </ul>
        </div>
        <button onClick={props.onClick} style={{ height: 30, borderWidth: 0, backgroundColor: colors.blue, color: 'white', fontSize: 15, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginBottom: '2%' }}>
          Add to Cart</button>
      </div>
    </div>
  )
}