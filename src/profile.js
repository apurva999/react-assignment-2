import React from "react";
import "./App.css"
function Card(props){
    return(
        <div className="container">
            <div className="card">
                <div className="card_img">
                    <img src={props.imgUrl}></img>
                </div>
                <div className="designation">
                    <h4>{props.designation}</h4>
                    <h3>{props.name}</h3>
                    <p>{props.about}</p>
                   
                </div>
                <button className="btn1">See More</button>
            </div>
        </div>
    )
}
  export default Card;
  