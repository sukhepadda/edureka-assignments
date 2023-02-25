import React from "react";
import QuickSearchItem from "./QuickSearchItem";

import firstimg from "../../images/1.png";
import secondimg from "../../images/2.png";
import thirdimg from "../../images/3.png";
import fourthimg from "../../images/4.png";
import fifthimg from "../../images/5.png";
import sixthimg from "../../images/6.png";

function QuickSearch() {
  return (
    <section id="second-section">
      <div className="container">
        <div className="title m-2">
          <h2 className="second-section-title">Quick Searches</h2>
          <p className="second-section-title-para">
            Discover restaurants by type of meal
          </p>
        </div>
        <div className="row">
          <QuickSearchItem
            cardImg={firstimg}
            cardHead="Breakfast"
            cardPara="Start your day with exclusive breakfast options"
            cardLink="breakfast"

          />
          <QuickSearchItem
            cardImg={secondimg}
            cardHead="Breakfast"
            cardPara="Start your day with exclusive breakfast options"
            cardLink="breakfast"
          />
          <QuickSearchItem
            cardImg={thirdimg}
            cardHead="Breakfast"
            cardPara="Start your day with exclusive breakfast options"
            cardLink="breakfast"
          />
          <QuickSearchItem
            cardImg={fourthimg}
            cardHead="Breakfast"
            cardPara="Start your day with exclusive breakfast options"
            cardLink="breakfast"
          />
          <QuickSearchItem
            cardImg={fifthimg}
            cardHead="Breakfast"
            cardPara="Start your day with exclusive breakfast options"
            cardLink="breakfast"
          />
          <QuickSearchItem
            cardImg={sixthimg}
            cardHead="Breakfast"
            cardPara="Start your day with exclusive breakfast options"
            cardLink="breakfast"
          />
        </div>
      </div>
    </section>
  );
}

export default QuickSearch;
