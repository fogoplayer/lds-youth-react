import React from "react";
import { render } from "react-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>Spritual Strength</h2>
    <p>
      The Lord has admonished priesthood holders, “Be ye clean” (<a href="https://www.lds.org/scriptures/dc-testament/dc/38.42">
        D&C 38:42
      </a>). In this section you will learn how personal worthiness is tied to
      priesthood power (see{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/121.34-46">
        D&C 121:34–46
      </a>). You will also make plans to begin or strengthen a habit of regular
      prayer and scripture study, which includes studying the words of the
      living prophets.
    </p>
    <ul className="collection">
      <CollectionItem
        text="Pray and Study the Scriptures"
        url="/duty-to-god/deacon/spiritual-strenth/pray-and-study"
      />
      <CollectionItem
        text="Live Worthily"
        url="/duty-to-god/deacon/spiritual-strenth/live-worthily"
      />
      <CollectionItem
        text="Understand Doctrine"
        url="/duty-to-god/deacon/spiritual-strenth/understand-doctrine"
      />
      <CollectionItem
        text="Review"
        url="/duty-to-god/deacon/spiritual-strenth/review"
      />
    </ul>
  </div>
);

export default Page;
