import React from "react";
import { Link } from "react-router-dom";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Understand Doctrine</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.68">
        Doctrine and Covenants 20:68
      </a>. Part of your duty as a priest is to “expound all things concerning
      the church of Christ.” Review the lists of doctrinal topics you studied as
      a{" "}
      <Link to="/duty-to-god/deacon/spiritual-strength/understand-doctrine">
        deacon
      </Link>{" "}
      and as a{" "}
      <Link to="/duty-to-god/teacher/spiritual-strength/understand-doctrine">
        teacher
      </Link>. Then write in the next section four or more additional topics you
      will learn about and teach over the next two years.
    </p>
    <ul>
      <li>The Godhead</li>
      <li>The Plan of Salvation</li>
      <li>The Atonement of Jesus Christ</li>
      <li>Prophets</li>
      <li>The Apostasy and the Restoration of the Gospel</li>
      <li>The Restoration of the Priesthood</li>
      <li>The Priesthood and Priesthood Keys</li>
      <li>Service</li>
      <li>Covenants and Ordinances</li>
      <li>Faith</li>
      <li>Repentance</li>
      <li>Baptism</li>
      <li>The Gift of the Holy Ghost</li>
      <li>Prayer and Personal Revelation</li>
      <li>Agency</li>
      <li>Temples</li>
      <li>Eternal Families and Family History Work</li>
      <li>The Law of Chastity</li>
      <li>The Word of Wisdom</li>
      <li>Tithing</li>
    </ul>
    <p>
      Study <a href="https://www.lds.org/scriptures/dc-testament/dc/4">D&C 4</a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/13">13</a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.46-60">
        20:46–60
      </a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/84.18-29">
        84:18–27
      </a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/107.1-21">
        107:1–21
      </a>;{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/121.34-46">
        121:34–46
      </a>; and{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/123.142-43">
        124:142–43
      </a>{" "}
      again. Reflect on your experiences and update your{" "}
      <a href="/LDSYouth/deacon/deaconSSDoctrine.html">
        outline on “The Priesthood and Priesthood Keys”
      </a>. Write about how your understanding and appreciation of the
      priesthood has changed.
    </p>
    <p>
      In preparation to become a full-time missionary, make a list of questions
      someone might ask about the topics you have studied, and discuss these
      questions with a parent or priesthood leader.
      <TextArea id="priestSSDoctrine1" />
    </p>

    <h4>Act</h4>
    <p>Doctrinal topics I will study:</p>
    <TextArea id="priestSSDoctrine2" />

    <h4>Share</h4>
    <p>
      Using the outlines you have prepared, teach others about these doctrinal
      topics. You could do this in family home evening, in a quorum meeting, in
      a home teaching visit, in seminary, or in a teaching opportunity with the
      full-time missionaries.
    </p>
    <p>When I will teach about these topics:</p>
    <TextArea id="priestSSDoctrine3" />
  </div>
);

export default Page;
