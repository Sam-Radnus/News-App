import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
export default class App extends Component {
  c='John'
  pageSize=15;
  render() {
    return (
      <div>
       
        <Router>
        <Navbar/>
        <Routes> 
    
       
          <Route exact path="/general" element={<News  key="general" pageSize={this.pageSize} country="gb" category="general"/>}></Route>
          <Route exact path="/business" element={<News  key="business" pageSize={this.pageSize} country="gb" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="gb" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health"  pageSize={this.pageSize} country="gb" category="health"/>}></Route>
          <Route exact path="/science" element={<News  key="science" pageSize={this.pageSize} country="gb" category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports"  pageSize={this.pageSize} country="gb" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology"  pageSize={this.pageSize} country="gb" category="technology"/>}></Route> 
          </Routes>
        </Router>
      </div>
    )
  }
}
