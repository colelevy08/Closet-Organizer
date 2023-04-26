import React from "react";

function NavBar({changeSearchClothes, searchClothes}) {

    return(
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search for clothes"
                value={searchClothes}
                onChange = {(event) => changeSearchClothes(event)}
            />
        </form>
    )
}

export default NavBar