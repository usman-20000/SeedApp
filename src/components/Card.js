import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { colors } from "../assets/Data";
import { BsCartDash } from "react-icons/bs";

export default function Card(props) {

  return (
    <div>
      <div class="card" className="w-full rounded-md border flex flex-col items-center bg-[#FFFBE6] p-2">
        <img src={props.image} class="card-img-top" alt="..." className="w-[95%] h-[120px] self-center mt-[2%] rounded-sm" />
        <div class="card-body" className="w-full items-center flex flex-col">
          <span className="w-full line-clamp-1 font-semibold ">{props.title}</span>
          <p className="w-full line-clamp-1">{props.detail}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <ul class="list-group list-group-flush">
            <li className="w-full font-semibold"><span>Price: {props.price}/Rs</span></li>
          </ul>
        </div>
        <button onClick={props.onClick} className="px-1 py-1 bg-[#347928] text-white self-end rounded-sm">
          <BsCartDash size={22} className="text-white" />
        </button>
      </div>
    </div>
  )
}