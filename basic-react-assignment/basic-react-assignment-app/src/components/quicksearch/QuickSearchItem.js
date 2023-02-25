import React from "react";
import { Link } from "react-router-dom";

function QuickSearchItem({ cardLink, cardImg, cardHead, cardPara }) {
  return (
    <Link to={`/${cardLink}`}>
      <div className="col-lg-4">
        <div className="row custum-card">
          <div className="col">
            <img
              height="100%"
              width="100%"
              src={cardImg}
              alt="img not available"
            />
          </div>
          <div className="col card-info-div">
            <h4 className="card-title">{cardHead}</h4>
            <p className="card-para">{cardPara}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default QuickSearchItem;
