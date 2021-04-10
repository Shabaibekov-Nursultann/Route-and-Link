import React from 'react'
import {Link} from 'react-router-dom'


export const Employees = () => {

    const data = [
        {
            name: 'Nursultan Shabaibekov',
            position: 'front-end-developer'
        },
        {
            name: 'Aisultan Seitov',
            position: 'back-end-developer'
        },
        {
            name: 'Baitur Kerimov',
            position: 'front-end-developer'
        },
        {
            name: 'Levinho',
            position: 'game-development'
        },
    ]

    return (
        <div  style={{height: '500px', height: '100px'}} className="about-us">
            <ul>
                {
                    data.map((el)=> [
                        <li style={{  display: 'flex', margin: '0 auto',borderRadius: '1000%',
                        backgroundColor: "aqua", 
                        justifyContent: 'center',
                        padding: "20px 0",
                       }}> {el.name}</li>,
                        <li style={{padding: "20px 0", margin: '0 auto', borderRadius: '1000%',
                        display: 'flex',
                        backgroundColor: "green", 
                        justifyContent: 'center',
                        height: "5px"}}>{el.position}</li>
                    ])
                }
            </ul>
        </div>
    )
}

