import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { colors } from "../assets/Data";

export default function CatCard(props) {

    return (
        <div>
            <div class="card" className="w-full rounded-md border flex flex-col items-center">
                <img src={props.image} class="card-img-top" alt="..." className="w-[95%] h-[120px] self-center mt-[2%] rounded-sm" />
                <div class="card-body" className="w-full items-center flex flex-col">
                    <span class="card-title p-2 font-semibold" className="w-[90%]">{props.title}</span>
                </div>
            </div>
        </div>
    )
}