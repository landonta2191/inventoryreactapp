
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
const baseUrl = 'http://localhost:8080/';

class InventoryDetails extends Component {

  state = {
    productDetails: []
  }
  componentDidMount() {

    const { match } = this.props;
    

    fetch(baseUrl + `inventory` + `/${match.params.id}`) 
    .then(response => response.json())
    .then( data => {
      this.setState({
        productDetails: data
    })
    })

  }


  render() {
    const { productDetails } = this.state;

    return (
      
      <div className='sideandtopgroup'>
        <Sidebar />
        <div className='inventory_sub'>
          <Topbar />

          <div className='productContainer__wrapper'>
            <button>BACK</button>

            <div className='productContainer'>
              <div className='productContainer__sub1'>
                <h2>Product Name Summary</h2>
                <button type='button' name='order'>New Order</button>     
              </div>
              <div className='intentoryContainer__sub2'>
                <p className='item-desc'>Description: {productDetails.description}</p>
                <p>Last Ordered: {productDetails.lastordered}</p>
                <p>Ordered By: {productDetails.orderedby}</p>
                <p>Reference Number: {productDetails.reference}</p>
                <p>Product Category: {productDetails.productCategory + '' }</p>
                <p>Quantity: {productDetails.quatity}</p>
                <p>Location: {productDetails.location}</p>
                <p>Status: {productDetails.status}</p>
              </div>   
            </div>
        </div>
      </div>
      </div>








      
    )
  }
}

export default withRouter(InventoryDetails)
