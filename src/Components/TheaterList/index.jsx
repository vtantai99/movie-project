import React from "react";

const TheaterList = () => {
  return (
    <section className="theaterList" id="theaterList">
      <div className="nav nav-tabs" id="myTab" role="tablist">
        <div className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </a>
        </div>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
      </div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          ...
        </div>
      </div>
    </section>
  );
};

export default TheaterList;
