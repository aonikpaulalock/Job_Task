// import React from 'react';
import { banner } from "../../data/banner";
import "../../assets/styles/home/banner.css"
import { AiFillCheckCircle } from 'react-icons/ai';
const Banner = () => {

  return (
    <section className="banner-container d-flex justify-content-center align-items-center">
      <div className="container p-sm-0 p-5">
        <div className="row">
          <div className="col-lg-7 col-md-6 pe-0 pe-md-3 pe-lg-5">
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
          <div className="col-lg-5 col-md-6">
            <div className="banner-image">
              <img src={banner.img} alt="img" className="img-fluid" />
              <div className="user-position">
                <h1 className="user-name">{banner.user.name}</h1>
                <p className="user-des">{banner.user.des}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;