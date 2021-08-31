import React from 'react'
import { useEffect, useState } from 'react'
export default function TechStack() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    },[])
    const getData = () => {
        const url = 'http://localhost:8000/projecttypes'
        fetch(url)
            .then((response) => response.json())
            .then(function(e){
                setData(e);
            })
    }
    console.log('Data: ',data);   
    return (
        <div>
            
        </div>
    )
}
