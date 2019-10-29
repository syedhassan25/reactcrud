import React,{ Component}  from 'react';
import { Link } from 'react-router';


export default class Master extends Component {

    render(){
        return(
            <div className="container">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Dashboard</a>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="add-item">Create Item</Link></li>
                  <li><Link to="display-item">Display Item</Link></li>
                </ul>
              </div>
          </nav>
              <div>
                  {this.props.children}
              </div>
          </div>
        );
    }
}