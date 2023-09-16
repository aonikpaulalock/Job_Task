import React from 'react';
import "../assets/styles/home/footer.css"
import logo from "../assets/image/result/logo-2.png"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="py-5">
      <div className="container p-sm-0 p-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-logo-content pb-sm-0 pb-5">
              <img src={logo} alt="" className="img-fluid" />
              <div>
                <button className="footer-login-button">Login</button>
                <button className="footer-demo-button">Book a Demo</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <ul className="shared-unordered">
              <p className="shared-footer-title">Use cases</p>
              <li>
                <Link to="#" className="shared-footer-list">Marketing</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">Business Development</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">Sales</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">Customer Success & Training</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <ul className="shared-unordered pt-sm-0 pt-5">
              <p className="shared-footer-title">product</p>
              <li>
                <Link to="#" className="shared-footer-list">How it works</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">About</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">Careers
                <button className="footer-hiring">We’re hiring!</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-6 ">
            <ul className="shared-unordered pt-sm-0 pt-5">
              <p className="shared-footer-title">resources</p>
              <li>
                <Link to="#" className="shared-footer-list">Documentation</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">Partners</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="shared-footer-list">GDPR Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;