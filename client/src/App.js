import './App.css';
import Weather from './Components/Weather';
import React, {useState, useEffect} from 'react';


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  //grabbing lattitude/longitude
  const successfulCoord = (obj) => {
      setLatitude(Math.round(obj.coords.latitude));
      setLongitude(Math.round(obj.coords.longitude));
  }

  const failedCoord = (obj) => {
      console.log('User did not allow location services on browser.');
  }

  window.navigator.geolocation.getCurrentPosition(successfulCoord, failedCoord);

  return (
    <div className="App">
      <h1>NASA API</h1>
      <Weather latitude={latitude} longitude={longitude}/>
    </div>
  );
}

export default App;
