import React, {useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [searchTerm, setSearchTerm] = useState('')

  const [plants, setPlants] = useState([])


  const baseUrl = 'http://localhost:6001/plants'

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(setPlants)
  }, [] )

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  function addPlant(newPlant) {
    const newPlantObj = {
      ...newPlant,
      Price: Number(newPlant.Price)
    }
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlantObj)
    }
    fetch(baseUrl,options)
      .then(res => res.json())
      .then(newPlant => setPlants([...plants, newPlant]))
  }

  return (
    <main>
      <NewPlantForm onHandleForm={addPlant} />
      <Search searchTerm={searchTerm} handleSearch={setSearchTerm}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
