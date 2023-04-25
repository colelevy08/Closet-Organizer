import React from "react";

function NavBar() {
    return(
        <div className="searchbar">
            <label htmlFor="search">Search Closet: </label>
            <input
                type="text"
                id="search"
                placeholder="Search for clothes"
            />
        </div>
    )
}

export default NavBar