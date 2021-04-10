import React, {  useState, useEffect } from 'react'
import {Link, Redirect} from 'react-router-dom'

export const TodoFetch = ({login}) => {
    const[data, setData] = useState(null)

    useEffect(()=> {
        fetch( `https://api.github.com/users/${login}`)
        .then((response)=>response.json())
        .then(setData)
    }, []);

    if(data) {
        return (
            <div>
                <h1>{data.login}</h1>
                <p>{data.location}</p>
                
            </div>
        );
} return (
    <div>No photo</div>
)
}