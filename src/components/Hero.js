import React from "react";
import '../App.css';
import grid from "../images/grid.png"
export default function Hero(){
    return(
        <section className="hero"> <img src={grid} className="hero--logo"/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p></section>
           
       
    )
}