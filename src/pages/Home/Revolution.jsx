import React from 'react';
import "../../assets/styles/home/revolution.css"
const Revolution = () => {
  return (
    <div className='container'>
      <div className='revolution-container'>
        <div className="row">
          <div className="col-md-8">
            <div className="revolution-contain">
              <h1 className='revolution-heading'>Join the demo experience revolution</h1>
              <p className='revolution-title'>Demos have come a long way from the traditional product demo video consumers were once familiar with. Learn how interactive software demos can showcase your product in all its glory, revolutionizing the way you sell and transforming the way your customers buy. </p>
            </div>
          </div>
          <div className="col-md-3 offset-1 d-flex justify-content-center align-items-center">
            <button className="revolution-button">Book a Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolution;