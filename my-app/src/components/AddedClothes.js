import React, { useEffect, useState } from 'react';
import ClothesCard from './ClothesCard';

const AddedClothes = () => {
  const [addedClothes, setAddedClothes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/clothes")
      .then((res) => res.json())
      .then((data) => setAddedClothes(data));
  }, []);
  

  return (
    <div>
      <h2>Added Clothes</h2>
      <ul className="cards"> {addedClothes.map((cloth) => (<ClothesCard cloth={cloth} key={cloth.id} />))}
      </ul>
    </div>
  )
};

export default AddedClothes;


