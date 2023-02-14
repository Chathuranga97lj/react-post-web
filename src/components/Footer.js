import React from "react";

function Footer() {
  return (
    <div
      className="mt-5 container-fluid bg-primary bg-gradient text-white"
      style={{ minHeight: "12rem" }}
    >
      <div className="row pt-4 text-center">
        {/* create 3 section each of 4 colos for lg and md device but for small device create 1 section of 12 cols */}
        <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
          <h5>Qick Links</h5>
          <div className="d-flex flex-column">
            <a href="/about" className="text-white p-1">
              About us
            </a>
            <a href="/" className="text-white p-1">
              Our Posts
            </a>
            <a href="/contact" className="text-white p-1">
              Our Team
            </a>
            <a href="/contact" className="text-white p-1">
              Contact us
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
          <h5>News Letter</h5>
          <div
            className="d-flex flex-column justify-content-around"
            style={{ minHeight: "8rem" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe to the news letter"
            />
            <button className="btn btn-warning">Subscribe</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h5>Contact Address</h5>
          <div className="d-flex flex-column">
            <p>
              <i className="px-1 fa-solid fa-location-dot"></i>Efito Solutions
            </p>
            <p>Galle Road</p>
            <p>Moratuwa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
