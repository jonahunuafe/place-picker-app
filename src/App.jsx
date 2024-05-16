import { useState, useEffect } from "react";
import Places from "./components/Places";
import { AVAILABLE_PLACES } from './data.js';
import { sortPlacesByDistance } from "./loc.js";


export default function App() {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES, 
        position.coords.latitude, 
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  return (
    <div>
      <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
        />
    </div>
  )
}