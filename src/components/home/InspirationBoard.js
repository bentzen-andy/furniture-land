import React from "react";

const InspirationBoard = () => {
  return (
    <div className="inspiration-board">
      <h1>Inspiration for your 9 to 5.</h1>
      <div className="inspiration-board__tagline">
        Dream workspace? Right this way.
      </div>
      <div className="inspiration-board__images">
        <div className="inspiration-board__image--col-1">
          <img src="" alt="Home Office" />
        </div>
        <div className="inspiration-board__image--col-2">
          <img src="" alt="Home Office" />
          <img src="" alt="Home Office" />
        </div>
      </div>
      <div className="inspiration-board__btn">Get Started</div>
    </div>
  );
};

export default InspirationBoard;
