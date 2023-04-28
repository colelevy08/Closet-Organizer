import React from "react";
import ClothesCard from "./ClothesCard"

function ClothesList({clothes, markClothesAsWorn, clothesWorn, deleteClothes, toggleIsLiked, isLiked}) {

    const renderClothesCard = clothes.map(cloth =>
        <ClothesCard 
            key = {cloth.id}
            cloth = {cloth}
            markClothesAsWorn = {markClothesAsWorn}
            clothesWorn = {clothesWorn}
            deleteClothes = {deleteClothes}
            toggleIsLiked = {toggleIsLiked}
            isLiked = {isLiked}
        />)

    return(
        <ul className="cards">
            {renderClothesCard}
        </ul>
    )
}

export default ClothesList