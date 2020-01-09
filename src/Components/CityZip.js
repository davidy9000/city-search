import React, { Component } from 'react'

class CityZip extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipArray: []      
        }

    }
    handleCityInput = () =>{
        var cityCamps = document.getElementById("search-text").value.toUpperCase();
        let linkToAPI = 'http://ctp-zip-api.herokuapp.com/city/'+ cityCamps;
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })  
            .then((myJson) => {
                let data = myJson;
                console.log(data);
                if(data !== undefined)
                    this.setState({zipArray: data});
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    render(){
        var zipList = this.state.zipArray.map(zip=> <li>{zip}</li>);
        return(
            <div>
                <p>City:</p>
                <input type="text" id="search-text" placeholder="nyc" onChange={ this.handleCityInput }/> 
                <ul>{zipList} </ul>
            </div>  
        )
    }
}

export default CityZip;