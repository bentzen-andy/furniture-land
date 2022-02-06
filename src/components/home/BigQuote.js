import React from "react";

const BigQuote = () => {
  return (
    <div className="big-quote">
      <div className="big-quote__col-1">
        <div className="big-quote__col-1--stars">
          &#10025; &#10025; &#10025; &#10025; &#10025;
        </div>
        <div className="big-quote__col-1--quote">
          “I’d recommend Haworth and Fern to anyone who is looking for the
          supreme.”
        </div>
        <div className="big-quote__col-1--attribute">—Hiro T.</div>
      </div>
      <div className="big-quote__col-2">
        <img src="" alt="Task Chair" />
        <div className="big-quote__col-2">Shop Fern</div>
      </div>
    </div>
  );
};

export default BigQuote;
