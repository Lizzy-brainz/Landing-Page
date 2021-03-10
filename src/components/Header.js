import React from "react";
import rightImage from "../image/image2.jpg";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="flex-item-1">
          <div className="toolbar">
            <h3 className="btn">Logo</h3>
            <a href="#" className="signup btn">
              Sign up
            </a>
          </div>
          <div className="container">
            <h1>
              People who <span style={{ display: "block" }}>care about</span>{" "}
              <span style={{ display: "block" }}>your growth</span>
            </h1>
            <div className="button-group">
              <a href="#" className="btn btn-black">
                Get started
              </a>
              <a href="#" className="btn btn-transparent">
                Try premium for free
              </a>
            </div>
            <div className="image-art">
              <img src={rightImage} alt="Right Image" className="image" />
            </div>
          </div>
        </div>
        <div className="flex-item-2">
          <div className="background-image"></div>
        </div>
      </header>
    </>
  );
};
export default Header;
