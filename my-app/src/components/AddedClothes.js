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
      {addedClothes.map((cloth) => (
        <div key={cloth.id}>
          <ClothesCard cloth={cloth} />
          <img src={cloth.image} alt={cloth.type} style={{width: '200px', height: '200px'}} />
        </div>
      ))}
    </div>
  );
};

export default AddedClothes;


