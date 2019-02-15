import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class IndividualItem extends Component {
  render() {
    return (
        <tr>
            <td>
            <Link style={{ textDecoration: 'none', color:'black' }} to={`/inventory/${this.props.id}`}><h3>{this.props.name}</h3></Link>
            <p className='tableDescription'>{this.props.description}</p>
            </td>
            <td className='inventory__right'>{this.props.lastordered}</td> 
            <td className='inventory__right'>{this.props.location}</td>
            <td className='inventory__right'>{this.props.quatity}</td>
            <td>{this.props.status}</td>
            <td><img id={this.props.id} onClick={this.props.deleteItem} src="/Assets/Icons/Trashbin.svg" alt="add"></img></td>
        </tr>
    )
  }
}
