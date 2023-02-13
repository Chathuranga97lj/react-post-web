import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase py-3">Contact Us</h3>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded text-muted contact-form-container mx-auto">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Contact no
            </label>
            <input type="text" className="form-control" id="phone" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="timing" className="form-label">
              {" "}
              When can we reach you
            </label>
            <select className="form-select" id="timing">
              <option defaultValue="">Best time to reach</option>
              <option value="M">Morning</option>
              <option value="A">Afternoon</option>
              <option value="E">Evening</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              {" "}
              Enter your query below
            </label>
            <textarea className="form-control" id="query"></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
