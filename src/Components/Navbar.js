import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
 
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar scroll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link className="nav-link active" to="/general">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/business">Business</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/general">General</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/health">Health</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/science">Science</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" to="/sports">Sports</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active"    to="/technology">Technology</Link>
        </li>
        
          <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a> 
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul> 
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar
