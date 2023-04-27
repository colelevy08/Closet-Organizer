import React from "react";
import ClothesCard from "./ClothesCard"

function ClothesList({clothes}) {

    const renderClothesCard = clothes.map(cloth =>
        <ClothesCard 
            key = {cloth.id}
            cloth = {cloth}
        />)

    return(
        <ul className="cards">
            {renderClothesCard}
        </ul>
    )
}

export default ClothesList