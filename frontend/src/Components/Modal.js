import React, { Component } from 'react';
import PropTypes from 'prop-types';
import warehouse from './warehousedata';
import { Link } from 'react-router-dom';
const baseURL = 'http://localhost:8080'

let counter = 0;
let id = 3;  
class Modal extends Component {
    // place in warehouse component
    state = {
        street: localStorage.getItem('street') || '',
        city: localStorage.getItem('city') || '',
        country: localStorage.getItem('country') || '',
        street: localStorage.getItem('street') || '',
        postalCode: localStorage.getItem('postalCode') || '',
        managerName: localStorage.getItem('managerName') || '',
        managerNumber: localStorage.getItem('managerNumber') || '',
        manEmail: localStorage.getItem('manEmail') || '',
        inventoryType: localStorage.getItem('inventoryType') || '',
        whName: localStorage.getItem('whName') || ''

      }

    handleSubmit = (e) => {
            e.preventDefault();
            

            var arr = Array.from(Object.keys(this.state), k => this.state[k]);
            let newarr = arr.map(s => s.trim())
            for (let i = 0; i < newarr.length; i++) {
                if(!newarr[i].length) {
                    counter++;   
                }
            }

            if(counter) {
                alert('please input all fields');
                counter = 0;
            } else {
                id++;
                let body = {
                    warehouse_id: id,
                    name: this.state.whName,
                    address: {
                        street: this.state.street,
                        city: this.state.city,
                        country: this.state.country,
                        postalcode: this.state.postalCode
                    }, 
                    contact: {
                        name: this.state.managerName,
                        number: this.state.managerNumber,
                        email: this.state.manEmail
                    },
                    inventory_type: [this.state.inventoryType],
                }
                console.log(body);
            let init = {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "content-type":"application/json"
                }
            };

            fetch(baseURL + '/warehouse', init)
            .then(data => data.json())
            .then(resp => {
                this.props.handleUpdate(resp);
                this.props.handleClose();
            })

        }
               
        
    }  
    
      

    //get the name attribute value of each input field and pass that as key in the state.  Set the 
    //value as equal to 
    handleInputFields= (e) => {

        const { target: { name, value } } = e;
        this.setState({
            [name]: value
        })

        localStorage.setItem(`${name}`, value);

    }

    render() {
        return (    
          <div style={{...flex, display: this.props.isOpen ? 'flex' : 'none'}}>
              <h2>modal shows up</h2>
              <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}></div>
              <div className="form-container" style={formModal}>
                  <h1>Add a new storage location</h1>
                  {/* submit form to add warehouse endpoint */}
                  <form >
                     <div className="warehouseName">
                        <label for='warehouse-name'>Warehouse Name</label>
                        <input type="text" name="whName" className='addWarehouseFields' id="warehouse-name" onChange={this.handleInputFields} value={this.state.whName} />
                     </div>

                      <div className='addCont_container'>   
                            <div className='address_group'>
                                <h3>Address</h3>

                                <label for='street'>Street Number & Name</label>
                                <input type="text" name="street" className='addWarehouseFields' onChange={this.handleInputFields} id="street" value={this.state.street} />
     

                                <label for='city'>City</label>
                                <input type="text" name="city" className='addWarehouseFields' id="city" onChange={this.handleInputFields} value={this.state.city} />


                                <label for='country'>Country</label>
                                <input type="text" name="country" className='addWarehouseFields' id="country" onChange={this.handleInputFields} value={this.state.country} />     


                                <label for='postalcode'>Postal Code</label>
                                <input type="text" name="postalCode" className='addWarehouseFields' id="postalcode" onChange={this.handleInputFields} value={this.state.postalCode}     />
                            </div>

                            <div className="contact_group" >
                                <h3>Contact Information</h3>

                                <label for='manager-name'>Warehouse Manager's Name</label>
                                <input type="text" name="managerName" className='contact_details' id="manager-name" onChange={this.handleInputFields} value={this.state.managerName} />


                                <label for='manager-number'>Phone Number</label>
                                <input type="text" name="managerNumber" className='contact_details' id="manager-number" onChange={this.handleInputFields} value={this.state.managerNumber} />


                                <label for='man-email'>Email Address</label>
                                <input type="text" name="manEmail" className='contact_details' id="man-email" onChange={this.handleInputFields} value={this.state.manEmail} />


                                <label for='inventory-type'>Inventory Type</label>
                                <input type="text" name="inventoryType" className='contact_details' id="inventory-type" onChange={this.handleInputFields} value={this.state.inventoryType} />
                            </div>

                        </div>
                        <button onClick={this.handleSubmit}>Submit Form</button>
                  </form>
              </div>
          </div>
        );
    }
}

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Modal;

const flex = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '95vh',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: 'rgba(57,57,57,0.6)',
};

const modalLayer = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    backgroundColor: 'transparent'
  };
  
  const formModal = {
    position: 'absolute',
    color: 'rgb(57,57,57)',
    backgroundColor: '#FFFFFF',
    width: '600px',
    maxWidth: '100%',
    height: '600px',
    maxHeight: '100%',
    zIndex: 2,
    borderRadius: '3px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
  };
