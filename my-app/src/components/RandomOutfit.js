import React from "react";

function RandomOutfit({clothes}) {

    const getRandomClothing = () => {
        if (clothes.length > 0) {
            const randomIndex = Math.floor(Math.random() * clothes.length)
            return clothes[randomIndex]
        }
        return null;
    }

    const handleClick = () => {
        const randomClothing = getRandomClothing()
        if (randomClothing) {
            alert(`Random Outfit: ${randomClothing.type} - ${randomClothing.color}`);
        } else {
            alert('No clothes available to generate a random outfit.');
        }
    };

    return(
        <button className="random-button" onClick={handleClick}>Random Outfit</button>
    )
}

export default RandomOutfit