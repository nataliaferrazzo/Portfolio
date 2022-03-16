import React from "react";


const CAD = ({ heading }) => {
  return (
    <div id="CAD" className="jumbotron jumbotron-fluid m-0">
      <div id="empty2"></div>
      <div className="container container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-auto md-center align-self-center">

          </div>
          <div id="empty4" className="d-lg-none"></div>
            <h2 className="display-6 pb-3 text-right text-title category border border-top-0 border-right-0 border-left-0 border-secondary">{heading}</h2>

          </div>
        </div>
      </div>
  );
};

export default CAD;
