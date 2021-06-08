import React from "react";
import Card from './card.js';

const CardList= ({Robots}) => {
    const CardComponent=Robots.map((user, i) =>{
    return (
    <Card key={i}
    id={Robots[i].id} 
    name={Robots[i].name}
    username={Robots[i].username}
    email={Robots[i].email}/>
    )})
 
    return(
    <div>
    {CardComponent}
    </div>
    );
}

export default CardList;