import React from 'react';
import './Business.css';



class Business extends React.Component {
  render() {
    return (
      <div className="b-container">
          <div className="b-item1">
            <img src={this.props.business.imageSrc} alt='' />
          </div>

        <div className="b-item2">
        <h2 >{this.props.business.name}</h2>
        </div>
         <div className = "b-item3">
            <p className="b-details" >{this.props.business.city} | {this.props.business.state + " " + this.props.business.zipcode} </p>
            <h3 className="b-details">{this.props.business.category}</h3>
            <h3 className="b-details">{this.props.business.rating + " "}stars {"| Count " +this.props.business.reviewcount}</h3>
         </div>
           
      </div>)

  }
}

export default Business;