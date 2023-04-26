import React from "react";

function ClothesCard({cloth}) {

    const {id, type, color, season, image} = cloth

    return(
        <li className="card">
            <img src={image} alt={type + color}></img>
            <h3>{color} {type}</h3>
            <p>Season: {season}</p>
        </li>
    )
}

export default ClothesCard