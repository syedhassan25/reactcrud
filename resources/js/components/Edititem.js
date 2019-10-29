import React,{Component} from 'react';
import Axios from 'axios';
import {browserHistory} from 'react-router';

export default  class Edititem extends Component{
    
            constructor(props){
                    super(props);
                    this.state = {
                        name:'',
                        price:''
                    }
                   
                this.handlsetvaluename = this.handlsetvaluename.bind(this);
                this.handlesetvalueprice = this.handlesetvalueprice.bind(this);
                this.handlesubmitform  = this.handlesubmitform.bind(this);    
            }

            componentDidMount(){
                var url = `http://localhost:8000/items/${this.props.params.id}/edit`;
                Axios.get(url).then(response => {
                    this.setState({
                        name:response.data.name,
                        price:response.data.price
                    })
                })
                .catch(err => console.log(err))
            }

    handlsetvaluename(e){
        e.preventDefault();
            this.setState({
                name:e.target.value
            })
    }

    handlesetvalueprice(e){
        e.preventDefault();
        this.setState({
            price:e.target.value
        })
    }
    handlesubmitform(e){
      e.preventDefault();
        let product = {
            name:this.state.name,
            price:this.state.price
        }

        let url = `http://localhost:8000/api/items/${this.props.params.id}`;
        Axios.patch(url,product)
        .then(response => {
          const { history } = this.props;
     
          browserHistory.push('/display-item');
        })
    }

    
    render(){
        return(
            <div>
            <h1>Update Item</h1>
            <form onSubmit={this.handlesubmitform}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Item Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handlsetvaluename} className="form-control" />
                  </div>
                </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Item Price:</label>
                      <input type="text" value={this.state.price} onChange={this.handlesetvalueprice} className="form-control col-md-6" />
                    </div>
                  </div>
                </div><br />
                <div className="form-group">
                  <button className="btn btn-primary">Update Item</button>
                </div>
            </form>
      </div>
        );
    }
}