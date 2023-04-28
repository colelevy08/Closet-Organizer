import React, {useState, useEffect} from "react";
import ClothesList from "./ClothesList";
import RandomOutfit from "./RandomOutfit";
import PlanOutfit from "./PlanOutfit";
import AddNewClothes from './AddNewClothes';
import NavBar from "./NavBar";

const baseUrl = "http://localhost:5000/"
const clothesUrl = baseUrl + "clothes/"

function ClosetContainer() {

    const [clothes, setClothes] = useState([])

    const [searchClothes, setSearchClothes] = useState('')

    const [clothesWorn, setClothesWorn] = useState([])

    const [isLiked, setIsLiked] = useState([])

    useEffect(fetchClothes, [])

    function fetchClothes() {
        fetch(clothesUrl)
        .then(r => r.json())
        .then(setClothes)
    }

    function addNewClothesFormSubmit(event, newClothes) {
        event.preventDefault()
        const postRequest = {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify(newClothes)
        }
        fetch(clothesUrl, postRequest)
        .then(r => r.json())
        .then(newClothesData => setClothes([...clothes, newClothesData]))
    }

    function changeSearchClothes(event) {
        setSearchClothes(event.target.value.toLowerCase())
    }

    const splitSearch = searchClothes.split(' ')

    const filteredSearchClothes = clothes.filter(function(cloth) {

        if (splitSearch.length === 1) return(
            splitSearch.some(word => cloth.type.toLowerCase().includes(word) || cloth.color.toLowerCase().includes(word) || searchClothes === "")
        )

        if (splitSearch.length > 1) {
            const typeMatch = splitSearch.some(word => cloth.type.toLowerCase().includes(word))
            const colorMatch = splitSearch.some(word => cloth.color.toLowerCase().includes(word))
            if (typeMatch && colorMatch) return(true)
        }
    })
    
    function markClothesAsWorn (id) {
        setClothesWorn([...clothesWorn, id])
    }

    function deleteClothes(id) {
        const removeCloth = clothes.filter(cloth => cloth.id !== id)
        console.log(removeCloth)
    }

    function toggleIsLiked(id) {
        setIsLiked([...isLiked, id])
    }

    return(
        <main>
            <NavBar 
                changeSearchClothes = {changeSearchClothes}
                searchClothes = {searchClothes}
            />
            <AddNewClothes 
                addNewClothesFormSubmit = {addNewClothesFormSubmit}
            />
            <RandomOutfit 
                clothes = {clothes}
            />
            <PlanOutfit />
            <ClothesList 
                clothes = {filteredSearchClothes}
                clothesWorn = {clothesWorn}
                markClothesAsWorn = {markClothesAsWorn}
                deleteClothes = {deleteClothes}
                toggleIsLiked = {toggleIsLiked}
                isLiked = {isLiked}
            />
        </main>
    )
}

export default ClosetContainer