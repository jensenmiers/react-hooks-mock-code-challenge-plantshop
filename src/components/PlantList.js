import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantItem = plants.map(plant => <PlantCard key={plant.id} {...plant} />)

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantItem}
    </ul>
  );
}

export default PlantList;
