import React from 'react'
// import './warehouse.css'
import { Link } from 'react-router-dom';

export default class WarehouseCard extends React.Component {
  render() {
    return (
        <div className='warehouse-card'>   
            <div className='warehouse-card__name'>
            <Link to= {'/warehouses/' + this.props.warehouse_id} > <h2 > {this.props.name}</h2> </Link>
            </div> 
            <div>
                <div className='warehouse-card__details'>
                <div className='warehouse-card__address'>
                    <h4>ADDRESS</h4>
                    <p> {this.props.address.street} </p>
                    <p> {this.props.address.city} </p>
                    <p> {this.props.address.postalcode} </p>
                </div>
                <div className='warehouse-card__contact'>
                    <h4>CONTACT</h4>
                    <p> {this.props.contact.name} </p>
                    <p> {this.props.contact.number} </p>
                    <p> {this.props.contact.email} </p>
                </div>
                <div className='warehouse-card__inventory'>
                    <h4>INVENTORY TYPE</h4>
                    <p> {this.props.inventory_type } </p>    
                </div>
                </div>
            </div>
        </div>
    )
  }
}


