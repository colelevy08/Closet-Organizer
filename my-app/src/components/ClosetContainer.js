import React, {useState, useEffect} from "react";
import ClothesList from "./ClothesList";
import FilterClothes from "./FilterClothes";
import RandomOutfit from "./RandomOutfit";
import PlanOutfit from "./PlanOutfit";
import AddNewClothes from './AddNewClothes';
import NavBar from "./NavBar";

const baseUrl = "http://localhost:5000/"
const clothesUrl = baseUrl + "clothes/"

function ClosetContainer() {

    const [clothes, setClothes] = useState([])

    const [searchClothes, setSearchClothes] = useState('')

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
        setSearchClothes(event.target.value)
    }

    const filteredSearchClothes = clothes.filter(cloth => cloth.type.toLowerCase().includes(searchClothes.toLowerCase()))
    console.log(filteredSearchClothes)

    return(
        <main>
            <NavBar 
                changeSearchClothes = {changeSearchClothes}
                searchClothes = {searchClothes}
            />
            <AddNewClothes 
                addNewClothesFormSubmit = {addNewClothesFormSubmit}
            />
            <FilterClothes />
            <RandomOutfit />
            <PlanOutfit />
            <ClothesList 
                clothes = {filteredSearchClothes}
            />
        </main>
    )
}

export default ClosetContainer