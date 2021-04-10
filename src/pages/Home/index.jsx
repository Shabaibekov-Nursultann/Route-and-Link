import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

    return <div   style={styles.page}>
    
   
        <ul>
          <li>
            <Link  to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/todos">todos</Link>
          </li>
          <li>
            <Link to="/employees">Workers</Link>
          </li>
          

        </ul>
          
        
        
        
    </div>
}

const styles = {
    page: {
      
        width: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '23%',
        backgroundColor: 'green',
        
    }
}