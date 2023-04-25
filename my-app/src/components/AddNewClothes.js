import React from 'react'

function AddNewClothes () {
    return(
        <form className='new-clothes-form'>
            <input
                type="text"
                name="type"
                placeholder="Clothes Type"/>
            <input
                type="text"
                name="color"
                placeholder="Clothes Color"/>
            <input
                text="text"
                name="imageUrl"
                placeholder="Image URL"/>
                <br></br>
            <input type="submit" value="Add new clothes" />
        </form>
    )
}

export default AddNewClothes