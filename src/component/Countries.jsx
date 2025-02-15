import React, { useEffect } from 'react';
import { useState } from 'react'
import Country from './Country';
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res =>res.json())
        .then(data =>setCountries(data));
    },[])
    
    return (
        <div>
            <h2>all countries:{countries.length}</h2>
            {
                countries.map(country=><Country key ={country.cca3} country={country} />)
            }
        </div>
    );
};

export default Countries;