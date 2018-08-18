import React from "react";
import { render } from "react-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>Spritual Strength</h2>
    <ul className="collection">
      <CollectionItem
        text="About"
        url="/duty-to-god/deacon/spiritual-strenth/about"
      />
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
