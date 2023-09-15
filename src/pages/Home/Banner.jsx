// import React from 'react';
import { banner } from "../../data/banner";
import "../../assets/styles/home/banner.css"
import { AiFillCheckCircle } from 'react-icons/ai';
const Banner = () => {

  return (
    <div className="banner-container d-flex justify-content-center align-items-center ">
      <div className="container">
        <div className="row">
          <div className="col-md-7 pe-5">
            <div className="banner-content">
              <h4 className="banner-title">{banner.title}</h4>
              <h1 className="banner-heading">{banner.heading}</h1>
              <p className="banner-subtitle">{banner.subTitle}</p>
              <div>
                {
                  banner.checkData.map((check) =>
                    <h6 key={check.id} className="banner-subtitle mb-3">
                      <AiFillCheckCircle className="check-list" />
                      {check.name}
                    </h6>
                  )
                }
              </div>
              <button className="banner-button">Book a Demo</button>
            </div>
          </div>
          <div className="col-md-5">
            <img src={banner.img} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;