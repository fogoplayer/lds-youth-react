import React from "react";
import { render } from "react-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>Priesthood Duties</h2>
    <p>
      The Lord has said that every priesthood holder should “learn his duty” and
      “act . . . in all diligence” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.99">
        D&C 107:99
      </a>). This section will help you learn and fulfill your duties as a
      deacon, which are outlined in{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.57">
        Doctrine and Covenants 20:57
      </a>,{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.59">59</a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/84.111">84:111</a>.
      Your priesthood duties include the following:
    </p>

    <h5>Administer Priesthood Ordinances</h5>
    <p>Deacons pass the sacrament.</p>

    <h5>Serve Others</h5>
    <p>
      Deacons assist the bishop in “administering . . . temporal things” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.68">
        D&C 107:68
      </a>). This may include gathering fast offerings, caring for the poor and
      needy, caring for the meetinghouse and grounds, serving as a messenger for
      the bishop in Church meetings, and fulfilling other assignments from the
      quorum president.
    </p>

    <h5>Invite All to Come unto Christ</h5>
    <p>
      Deacons “watch over the church [and are] standing ministers unto the
      church” (<a href="https://www.lds.org/scriptures/dc-testament/dc/84.111">
        D&C 84:111
      </a>). They “warn, expound, exhort, and teach, and invite all to come unto
      Christ” (D&C 20:59). This includes setting a good example, fellowshipping
      quorum members and others, notifying members of Church meetings, speaking
      in meetings, sharing the gospel, and bearing testimony
    </p>
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
