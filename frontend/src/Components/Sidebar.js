import React from 'react';
// import './sidebar.css'
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  render() {
    return (
      <section className='sidebar'>
        <img className='wordmark' src='../Assets/Wordmark/Wordmark.svg' alt='instock logo'/>  
        <div className='sidebar__nav'>
            <div>
                <Link to='/inventory'><img src='../Assets/Icons/Inventory.svg' alt='inventory icon'/></Link>
                <p>Inventory</p>
            </div>
            <div>
            <Link to='/warehouses'> <img src='../Assets/Icons/Location.svg' alt='location icon'/></Link>
            <p>Locations</p> 
           
            </div>
            <div>    
                <img src='../Assets/Icons/User.svg' alt='users icon' /> <p>Users</p> 
            </div>    
        </div>
      </section>
    )
  }
}

