import React from "react";
import ClothesList from "./ClothesList";
import FilterClothes from "./FilterClothes";
import RandomOutfit from "./RandomOutfit";
import PlanOutfit from "./PlanOutfit";

function ClosetContainer() {
    return(
        <div>
            <FilterClothes />
            <ClothesList />
            <RandomOutfit />
            <PlanOutfit />
        </div>
    )
}

export default ClosetContainer