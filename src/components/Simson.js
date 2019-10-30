
import React, { Component } from 'react'
import Axios from 'axios'


 export default class Simson extends Component {
     
    state = {
        simson: null
    }
     
     getSimson = () => {
         const url = "https://quests.wilders.dev/simpsons-quotes/quotes"
         Axios.get(url)
         .then(response => response.data)
         .then(data =>{
             this.setState({
                 simson:data
             });
         });
     };
     
     componentDidMount(){
         this.getSimson()
     }
     render() {
         return (
             <div>
                 {this.state.simson == null ? ("Loading") : (
                     <div>
                         <img src={this.state.simson[0].image} alt={this.state.simson[0].character} />   
                         <div> {this.state.simson[0].character}</div>  
                         <div>{this.state.simson[0].quote}</div>                   
                     </div>
                 )}
                 
                 <button onClick={this.getSimson}>get another simson</button>
             </div>
         )
     }
 }
 
