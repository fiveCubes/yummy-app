

import React from 'react';
import './App.css';
import BusinessList from '../businessList/BusinessList';
import SearchBar from '../searchBar/SearchBar';
import Yelp from '../../util/Yelp';



class App extends React.Component
{
    constructor()
    {
        super();
        this.state= {
            business:[]
        }
        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term,location,searchBy)
    {
        //console.log(`${term}, ${location},${searchBy}`)
        if(!location)
        {
            location="seatle"
        }
        Yelp.search(term,location,searchBy)
        .then(b=> {
            //console.log("going to start setchange")
            this.setState({business: b});
            //console.log("state changed");
            //console.log("state changed");
            
        });


    }
    componentDidMount()
    {
        this.searchYelp("","seatle","best_match");
    }
    
    render()
    {
        
        if(!this.state.business)
        {
           this.state.business=[];
           alert("search Not Found")
        }
        return ( 
            <div>
                <h1 id="top-heading"> 
                 Yummy!!!!!!
                </h1>
                <SearchBar search = {this.searchYelp}></SearchBar>
               {/* <BusinessList businesslist= {this.state.business ? this.state.business:[]}></BusinessList> */}
                <BusinessList businesslist = {this.state.business}></BusinessList>
    
        </div>
            )       
    }
}

//const App = () => <h1> testing</h1>

export default App;