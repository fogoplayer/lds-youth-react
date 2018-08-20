import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Understand Doctrine</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/11.21">
        Doctrine and Covenants 11:21
      </a>. What promises does the Lord give to those who study His word? You
      will need a basic understanding and a testimony of gospel truths to
      fulfill your duties now as a priesthood holder and in the future as a
      full-time missionary and as a husband and father.
    </p>
    <p>
      Look at this list of doctrinal topics, and choose four or more that you
      would like to learn about. One of these should be âThe Priesthood and
      Priesthood Keys.â You can use the scriptures (including the Topical
      Guide), True to the Faith, Preach My Gospel, and the words of latter-day
      prophets to learn about these topics.
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
    <p>For each topic you study, create a simple outline. It could include:</p>
    <ol>
      <li>A definition of the topic</li>
      <li>Teachings and examples from the scriptures and your own life</li>
      <li>Your thoughts and feelings about why this topic is important.</li>
    </ol>
    <p>
      For examples of outlines, see{" "}
      <a href="https://www.lds.org/manual/preach-my-gospel-a-guide-to-missionary-service/how-do-i-study-effectively-and-prepare-to-teach">
        Preach My Gospel (chapters 2 and 3)
      </a>{" "}
      or visit <a href="https://dutytogod.lds.org">dutytogod.lds.org</a>.
    </p>

    <h4>Act</h4>
    <p>Doctrinal topics I will study:</p>
    <TextArea id="deaconSSDoctrine1" />

    <h4>Share</h4>
    <p>
      Using the outlines you have prepared, teach others about these doctrinal
      topics. Counsel with your parents and quorum leaders to determine when you
      can do this.
    </p>
    <p>When I will teach about these topics:</p>
    <TextArea id="deaconSSDoctrine2" />
  </div>
);

export default Page;
