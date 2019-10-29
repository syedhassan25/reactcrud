import React, {Component} from 'react';
import Axios from 'axios';
import {browserHistory} from 'react-router';

export default  class Createitem extends Component{
            constructor(props){
                super(props)
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handlefeildname = this.handlefeildname.bind(this);
                this.handlefeildprice = this.handlefeildprice.bind(this);
                this.state = {
                    productname: '',
                    productprice:''    
                }
            }

            handlefeildname(e){
                this.setState({
                    productname:e.target.value
                })
            }

            handlefeildprice(e){
                this.setState({
                    productprice:e.target.value
                })
            }

            handleSubmit(e){
              e.preventDefault();
              const products = {
                name: this.state.productname,
                price: this.state.productprice
              }
              let uri = 'http://localhost:8000/api/items';
              axios.post(uri, products).then((response) => {
                browserHistory.push('/display-item');
              });
            }

    render(){
        return(
            <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" onChange={this.handlefeildname} className="form-control" />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" onChange={this.handlefeildprice} className="form-control col-md-6" />
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
        );
    }
}