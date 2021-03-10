import React, {useState, useEffect} from 'react';

const Nasa = (props) => {
    const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2020-08-02'
    const key = 'IXEgq2oN9iMcf1dNi08UjQzh78tNNE8TvdLoajZJ'
    
    const fetchResults = () => {
    fetch(`${baseUrl}&api_key=${key}`)
    .then(res => res.json())
    .then(json => console.log(json))
    } 
    fetchResults()

    return (
        <div>
            <p>Test</p>
            {/* {image !== '' ? <insert card image element> : <div></div>} */}
        </div>
    )
}

export default Nasa;