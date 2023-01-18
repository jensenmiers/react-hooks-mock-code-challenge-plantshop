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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
