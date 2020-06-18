import React from 'react';
import './BusinessList.css';
import Business from '../business/Business';

class BusinessList extends React.Component
{
   

    render()
    {
       
        const b = this.props.businesslist.map((bus,i)=> <Business key={i} business = {bus}></Business>)
    
        return (<div className="BusinessList">
            
            {b}
            
            </div>)
    }
}

export default BusinessList;