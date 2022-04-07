import React, { Component } from 'react'
import './css/NewsItem.css'
const NewsItem =(props)=> 
    {
      
        return (
            <div className="container">
                <div className="card">
  <img src={props.imageUrl} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}<span className="position-absolute top-0  left-80% translate-middle badge rounded-pill bg-danger" style={{zIndex:1,width:"5 px",height:"10 px"}}>
    {props.source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
    <p className="card-text">{props.description}..</p>
    <p className="card-text"><small className="text-muted">By {props.author} on {props.date}</small></p>
    <a href={props.newsUrl} target="_blank" className="btn btn-md btn-primary">Read more</a>
  </div>
</div>
</div>

            
        )
    }

    export default NewsItem