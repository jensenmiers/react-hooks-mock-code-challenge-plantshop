import React,{useState} from "react";

function PlantCard({name, image, price}) {

  const [button, setButton] = useState(true)
  
  

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button onClick={() => setButton(!true)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
