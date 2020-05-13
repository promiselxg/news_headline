 import React, { Component } from 'react';
import axios from 'axios'
 const Context = React.createContext();

 export class Provider extends Component {

     state = {
         headlines : [],
         heading : 'Top 20 Newspaper Headlines'
     };

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            console.log(res.data)
            const { articles } = res.data
            this.setState({ headlines : articles})
        })
        .catch(err => console.log(err))
     }
  
     render() {
         return (
             <Context.Provider value={this.state}>
                { this.props.children }
             </Context.Provider>
         )
     }
 }
 

 export const Consumer = Context.Consumer;