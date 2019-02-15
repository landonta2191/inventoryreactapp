import React from 'react'
import WarehouseCard from './warehouseCard';
// import './warehouse.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Modal from './Modal';
// import { Link } from 'react-router-dom';


export default class Warehouse extends React.Component {
state = {
  warehouseData : [],
  isOpen: false
}

handleClose = () => {
  this.setState({
    isOpen:!this.state.isOpen,
  })
}

handleUpdate = (data) => {
  this.setState({
    warehouseData: data
  })
}
    

componentDidMount() {
  fetch('http://localhost:8080/warehouses')
    .then(response  => response.json())
    .then (data => {
      console.log(data);
      this.setState({
      warehouseData: data,
    })
    })
    .catch( error => {
      console.log(error);
    }
    )}
  

  render() {
    let warehouse = this.state.warehouseData
    return (
       <div className='sideandtopgroup'>
        <Sidebar />
        <div className='inventory_sub'>
          <Topbar />
      <div className='warehouse'>
       <h1 className='locations'>Locations</h1>
       <h4 className='filter'>Filter</h4>

       {warehouse.map( location => {
         return (
          
            <WarehouseCard
            name = {location.name} 
            address = {location.address}
            contact = {location.contact}
            inventory_type = {location.inventory_type}
            warehouse_id = {location.warehouse_id}
             /> 
            
          )
       })}
      <Modal isOpen={this.state.isOpen} handleClose={this.handleClose} handleUpdate={this.handleUpdate} /> 
       <button className='add-warehouse' onClick={this.handleClose}> + </button>
       
      </div>
     
      </div>
      </div>
    )
  }
}

