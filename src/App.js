import logo from './logo.svg';
import './App.css';


import React, { Component ,useRef} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
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
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
    
  }
 setProgress=(progress)=>
  {
     this.setState({progress:progress})
  }
  render() {
    return (
      <div>
       
        <Router>
        <Navbar/>
      
        
        <LoadingBar
        color='#f11946'
        height={5}
        progress={this.state.progress}
      />
      
        <Routes> 
    
          <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="gb" category="general"/>}></Route>
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="gb" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} country="gb" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health"  pageSize={this.pageSize} country="gb" category="health"/>}></Route>
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="gb" category="science"/>}></Route>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports"  pageSize={this.pageSize} country="gb" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress}key="technology"  pageSize={this.pageSize} country="gb" category="technology"/>}></Route> 
          </Routes>
        </Router>
      </div>
    )
  }
}
