import React from "react";
import { render } from "react-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>About</h2>

    <p>
      The Lord has admonished priesthood holders, “Be ye clean” (<a href="https://www.lds.org/scriptures/dc-testament/dc/38.42">
        D&C 38:42
      </a>). In this section you will deepen your understanding of the
      relationship between personal worthiness and priesthood power (see{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/121.34.46">
        D&C 121:34–46
      </a>). You will also make plans to strengthen your habit of regular prayer
      and scripture study, which includes studying the words of the living
      prophets.
    </p>
    <p>
      This section is organized into the following areas: Pray and Study the
      Scriptures, Live Worthily, and Understand Doctrine.
    </p>
    <ul className="collection">
      <CollectionItem
        text="Pray and Study the Scriptures"
        url="/duty-to-god/priest/spiritual-strength/pray-and-study-the-scriptures"
      />
      <CollectionItem
        text="Live Worthily"
        url="/duty-to-god/priest/spiritual-strength/live-worthily"
      />
      <CollectionItem
        text="Understand Doctrine"
        url="/duty-to-god/priest/spiritual-strength/understand-doctrine"
      />
      <CollectionItem
        text="Review"
        url="/duty-to-god/priest/spiritual-strength/review"
      />
    </ul>
  </div>
);

export default Page;
