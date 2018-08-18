import React from "react";
import { render } from "react-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>Priesthood Duties</h2>
    <ul className="collection">
      <CollectionItem
        text="Administer Priesthood Ordinances"
        url="/duty-to-god/deacon/preisthood-duties/administer-priesthood-ordinances"
      />
      <CollectionItem
        text="Serve Others"
        url="/duty-to-god/deacon/preisthood-duties/live-worthily"
      />
      <CollectionItem
        text="Understand Doctrine"
        url="/duty-to-god/deacon/preisthood-duties/understand-doctrine"
      />
      <CollectionItem
        text="Review"
        url="/duty-to-god/deacon/preisthood-duties/review"
      />
    </ul>
  </div>
);

export default Page;
