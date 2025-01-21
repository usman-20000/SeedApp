import React from "react";
import { colors } from "../assets/Data";

export default function Footer() {
    return (
        <div style={{ display: 'flex', height: 150, width: '100%', backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h5 style={{ color: 'white' }}>About</h5>
            <text style={{ color: 'white', fontSize: 12 }}>Agri App</text>
            <text style={{ color: 'white', fontSize: 12 }}>example@gmail.com</text>
            <text style={{ color: 'white', fontSize: 12 }}>+92 300123456</text>
        </div>
    )
}