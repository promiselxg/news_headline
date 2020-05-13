import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/spinner'
import Track from './Track';
import uuid from 'react-uuid'

 class Tracks extends Component {
    render() {
        return (
            <Consumer>
                { value =>{
                    const { headlines,heading } = value;
                    if(headlines === undefined || headlines.length === 0){
                        return <Spinner/>
                    }else{
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-5 heading">{heading}</h3>
                                <div className="row">
                                    {headlines.map(item =>(
                                       <Track 
                                        key={uuid()} news_headline={item.title}
                                        image={item.urlToImage}
                                        description={item.description}
                                        publishedAt={item.publishedAt}
                                        source={item.source.name}
                                        url={item.url}
                                       /> 
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Tracks