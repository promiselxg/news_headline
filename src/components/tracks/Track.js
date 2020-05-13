import React from 'react'
import { Card } from 'react-bootstrap'
import Moment from 'react-moment'
import news_logo from '../layout/news_logo.jpg'

const Track = (props) => {
    let { 
        news_headline,
        image,
        description,
        publishedAt,
        source,
        url 
    } = props;
    if(image === null || image === undefined ){
        image = news_logo
    }
    //news_headline = news_headline.split(" |")[0]
    news_headline = news_headline.split(" -")[0]
    return (
        <div className="card card-body bg-dark mb-5"> 
           <div className="row">
               <div className="col-md-3">
               <Card.Img variant="top" src={image} style={{ height: '15rem' }} alt={image}/>
               </div>
               <div className="col-md-9 card-body">
                   <Card.Title><a href={url} target="_blank" rel="noopener noreferrer">{news_headline}</a></Card.Title><hr/>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Footer>
                        <b>Published </b>: <Moment fromNow>{publishedAt}</Moment> &nbsp;
                        <b>Source : </b><i>{source}</i>
                    </Card.Footer>
               </div>
           </div>
        </div>
    )
}


export default Track