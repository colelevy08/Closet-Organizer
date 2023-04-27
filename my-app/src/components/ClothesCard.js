import React from "react";

function ClothesCard({cloth, markClothesAsWorn, clothesWorn}) {

    const {id, type, color, season, image} = cloth

    return(
        <li className="card">
            <img src={image} alt={type + color}></img>
            <h3>{color} {type} <button>❤️</button></h3>
            <p>Season: {season}</p>
            {!clothesWorn.includes(id) ?(
                <button
                    onClick={() => markClothesAsWorn(id)}
                >Clean</button>
            ) : (
                <button>Worn Recently</button>
            )}
            <br></br>
            <button>Remove</button>
        </li>
    )
}

export default ClothesCard