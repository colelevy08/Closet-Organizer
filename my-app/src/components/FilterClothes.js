import React from "react";

function FilterClothes() {
    return(
        <div>
            <label>Filter By:</label>
            <select>
                <option value='All'>All</option>
                <option value='Type'>Type</option>
                <option value='Color'>Color</option>
                <option value='Season'>Season</option>
            </select>
        </div>
    )
}

export default FilterClothes