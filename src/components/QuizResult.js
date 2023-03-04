import React from "react";

const Result = (props) => {
  return (
    <>
      <div className="show-score">
        Your Score:{props.score}
        <br />
        Total Score:{props.totalScore}
      </div>
      <div className="btn-position">
        <button id="next-button" onClick={props.tryAgain}>
          Try Again
        </button>
      </div>
    </>
  );
};

export default Result;
