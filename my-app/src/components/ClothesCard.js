import React from "react";

function ClothesCard({cloth, markClothesAsWorn, clothesWorn, deleteClothes, isLiked, toggleIsLiked}) {

    const {id, type, color, season, image} = cloth

    return(
        <li className="card">
            <img src={image} alt={type + color}></img>
            <h3>{color} {type} 
            {!isLiked.includes(id) ?(
                <button
                    onClick={() => toggleIsLiked(id)}
                >Favorite</button>
                ) : (
                <button
                    onClick={() => toggleIsLiked(id)}
                >❤️</button>
                )}
            </h3>
            <p>Season: {season}</p>
            {!clothesWorn.includes(id) ?(
                <button
                    onClick={() => markClothesAsWorn(id)}
                >Clean</button>
            ) : (
                <button>Worn Recently</button>
            )}
            <button
                onClick={() => deleteClothes(id)}
            >Remove</button>
        </li>
    )
}

export default ClothesCard