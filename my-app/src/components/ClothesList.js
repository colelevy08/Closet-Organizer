import React from "react";
import ClothesCard from "./ClothesCard"

function ClothesList({clothes, markClothesAsWorn, clothesWorn}) {

    const renderClothesCard = clothes.map(cloth =>
        <ClothesCard 
            key = {cloth.id}
            cloth = {cloth}
            markClothesAsWorn = {markClothesAsWorn}
            clothesWorn = {clothesWorn}
        />)

    return(
        <ul className="cards">
            {renderClothesCard}
        </ul>
    )
}

export default ClothesList