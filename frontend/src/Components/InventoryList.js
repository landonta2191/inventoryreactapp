import React, { Component } from 'react'
import IndividualItem from "./IndividualItem"
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../App.css'
const baseUrl = 'http://localhost:8080/';
const endpoint= "inventory";
const endpoint1= "warehouses";

//JAKE + LANDON
export default class InventoryList extends Component {
    state = {
        inventoryarray: [],
        update: false
      };
    
    deleteItem = (e) => {
        let id = e.target.id;
        let init = {
            method: 'delete'
        }
        console.log(init.url);
        fetch(baseUrl + 'product/' + id, init)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fetch(baseUrl+ endpoint)
            .then(response  => response.json())
            .then(data => this.setState({inventoryarray: data}))
            .catch( error => console.log(error));
        })
        .catch( error => console.log(error));
        this.setState({ update: true });
    }
    

    componentDidMount() { 
      const { match } = this.props;
      if (match.params.id) {
        fetch(baseUrl+ endpoint1 + "/" + match.params.id)
        .then(response  => response.json())
        .then (data => {
        this.setState({
        inventoryarray: data,
        })
        })
        .catch( error => {
          console.log(error);
        }) 
      }
      else {
        fetch(baseUrl + endpoint)
        .then(response  => response.json())
        .then (data => {
        this.setState({
        inventoryarray: data,
        })
        })
        .catch( error => {
          console.log(error);
        })  
       }
      }

  componentDidUpdate() {
    if(this.state.update) {
        if (this.props.id) {
            console.log(baseUrl+ endpoint1 + "/" + this.props.id)
            fetch(baseUrl+ endpoint1 + "/" + this.props.id)
            .then(response  => response.json())
            .then (data => {
            this.setState({
            inventoryarray: data,
            update: false
            })
            })
            .catch( error => {
              console.log(error);
            }) 
          }
          else {
            fetch(baseUrl+ endpoint)
            .then(response  => response.json())
            .then (data => {
            this.setState({
            inventoryarray: data,
            update: false
            })
            })
            .catch( error => {
              console.log(error);
            })  
        }
    }
  }

  render() {
    
    const thelist= this.state.inventoryarray.map((inventory) => {
        return <IndividualItem
          deleteItem={this.deleteItem}
          id= {inventory.id}
          description= {inventory.description}
          name= {inventory.name}
          lastordered= {inventory.lastordered}
          location={inventory.location}
          quatity={inventory.quatity}
          status={inventory.status}
        />
    });
    return (
      <div className='sideandtopgroup'>
        <Sidebar />
        <div>
          <Topbar />
          <div className="inventory-list">
          <div className="inventory-wrapper">
              <div className="inventory-wrapper--table">
                  <h1>Inventory</h1>
                  <h3>filter</h3>
              </div>
                  <table>
                    <tbody>
                    <tr>
                        <th>ITEM</th>
                        <th className='inventory__right'>LAST ORDERED</th> 
                        <th className='inventory__right'>LOCATION</th>
                        <th className='inventory__right'>QUANTITY</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                    {thelist}
                    </tbody>
                  </table>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
