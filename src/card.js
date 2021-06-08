import React from "react";


const Card= (props)=>{
    const {username}=props; //destructured
    return( 
<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${props.id}?200*200`} alt='robo1'/>
    <h2>{props.name}</h2>
    <h3>{username}</h3>
    <p>{props.email}</p>
</div>

    );
};
export default Card; 