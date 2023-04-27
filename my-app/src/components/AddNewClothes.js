import React, {useState} from 'react'

function AddNewClothes ({addNewClothesFormSubmit}) {

    const [formType, setFormType] = useState('')
    const [formColor, setFormColor] = useState('')
    const [formImage, setFormImage] = useState('')
    const [formSeason, setFormSeason] = useState('')

    function changeFormType(event) {
        setFormType(event.target.value)
    }

    function changeFormColor(event) {
        setFormColor(event.target.value)
    }

    function changeFormImage(event) {
        setFormImage(event.target.value)
    }

    function changeFormSeason(event) {
        setFormSeason(event.target.value)
    }

    const newClothes = {
        type: formType,
        color: formColor,
        season: formSeason,
        image: formImage
    }

    return(
        <div className='new-clothes-form'>
            <h2>Expand Your Wardrobe</h2>
            <form onSubmit={(event) => addNewClothesFormSubmit(event, newClothes)} >
                <input
                    type="text"
                    name="type"
                    value={formType}
                    onChange={changeFormType}
                    placeholder="Clothes Type"/>
                <input
                    type="text"
                    name="color"
                    value={formColor}
                    onChange={changeFormColor}
                    placeholder="Clothes Color"/>
                <input 
                    type="text"
                    name="season"
                    value={formSeason}
                    onChange={changeFormSeason}
                    placeholder='Season'/>
                <input
                    text="text"
                    name="imageUrl"
                    value={formImage}
                    onChange={changeFormImage}
                    placeholder="Image URL"/>
                <button type="submit">Add Clothes</button>
        </form>
        </div>
    )
}

export default AddNewClothes