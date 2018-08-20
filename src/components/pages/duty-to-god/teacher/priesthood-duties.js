import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>Priesthood Duties</h2>
    <p>
      The Lord has said that every priesthood holder should “learn his duty” and
      “act . . . in all diligence” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.99">
        D&C 107:99
      </a>). This section will help you learn and fulfill your duties as a
      teacher, which are outlined in{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.53-59">
        Doctrine and Covenants 20:53–59
      </a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/84.111">84:111</a>{" "}
      and which include all the duties of a deacon (listed{" "}
      <Link to="/duty-to-god/deacon/priesthood-duties">here</Link>). Your duties
      can be organized into three groups:
    </p>

    <h4>Administer Priesthood Ordinances</h4>
    <p>Teachers prepare and pass the sacrament.</p>

    <h4>Serve Others</h4>
    <p>
      Teachers assist the bishop in “administering . . . temporal things” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.68">
        D&C 107:68
      </a>). This may include gathering fast offerings, caring for the poor and
      needy, caring for the meetinghouse and grounds, serving as a messenger for
      the bishop in Church meetings, and fulfilling other assignments from the
      quorum president.
    </p>

    <h4>Invite All to Come unto Christ</h4>
    <p>
      Teachers are to “watch over the church always, and be with and strengthen
      them” (<a href="https://www.lds.org/scriptures/dc-testament/dc/20.53">
        D&C 20:53
      </a>). One way to do this is by serving as a home teacher. Teachers also
      “see that there is no iniquity in the church, neither hardness with each
      other, neither lying, backbiting, nor evil speaking; and see that the
      church meet together often” (<a href="https://www.lds.org/scriptures/dc-testament/dc/20.54-55">
        D&C 20:54–55
      </a>). This responsibility includes being a peacemaker, being an example
      of moral integrity and uprightness, and inviting others to attend church.
    </p>
    <p>
      They continue to “warn, expound, exhort, and teach, and invite all to come
      unto Christ” (<a href="https://www.lds.org/scriptures/dc-testament/dc/20.59">
        D&C 20:59
      </a>). This includes setting a good example, fellowshipping quorum members
      and others, speaking in Church meetings, sharing the gospel, and bearing
      testimony
    </p>
    <ul className="collection">
      <CollectionItem
        text="Administer Priesthood Ordinances"
        url="/duty-to-god/teacher/priesthood-duties/administer-priesthood-ordinances"
      />
      <CollectionItem
        text="Serve Others"
        url="/duty-to-god/teacher/priesthood-duties/serve-others"
      />
      <CollectionItem
        text="Invite All to Come Unto Christ"
        url="/duty-to-god/teacher/priesthood-duties/invite-all-to-come-unto-christ"
      />
      <CollectionItem
        text="Review"
        url="/duty-to-god/teacher/priesthood-duties/review"
      />
    </ul>
  </div>
);

export default Page;
