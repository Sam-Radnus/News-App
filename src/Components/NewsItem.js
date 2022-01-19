import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getByTitle } from '@testing-library/react'

export class NewsItem extends Component {
    static propTypes = {

    }
    constructor()
    {
        super();
        console.log("Hello i am a constructor ")
    }
    render() {
        let {title,description,imageURL,newsURL,author,date,source}=this.props;
        return (
            <div className="my-4">
              <div className="card" style={{width: "18rem"}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
                <img src={imageURL} className="card-img-top" alt="..."/>
                   <div className="card-body">
                       <h5 className="card-title">{title}</h5>
                       <p className="card-text">{description}</p>
                       <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                       <a href={newsURL} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
               </div>
            </div>
           
        )
    }
}

export default NewsItem
