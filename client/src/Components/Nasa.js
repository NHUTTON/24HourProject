import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from  'reactstrap';

const Nasa = (props) => {
    const [image, setImage] = useState('');
    const baseUrl = 'https://api.nasa.gov/planetary/earth/assets'
    const key = 'IXEgq2oN9iMcf1dNi08UjQzh78tNNE8TvdLoajZJ'


    const fetchResults = () => {
      const long = props.longitude;
      const lat = props.latitude;

      if (props.latitude !== '' && props.longitude !== '') {
          fetch(`${baseUrl}?lon=${long.toFixed(2)}&lat=${lat.toFixed(2)}&&dim=0.280&api_key=${key}`)
          .then(res => res.json())
          .then(data => {
            setImage(data.url)
          })
      }
    }

    useEffect(() => {
        fetchResults();
    }, [props.latitude, props.longitude])
    
    return (
    <div>
      <Card>
      <img width="50%" src={image} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h5">This is a satelite image of your current location</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">-Image quality is dependent on your location</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    )
}



export default Nasa;