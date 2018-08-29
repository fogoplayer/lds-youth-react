import React from "react";
import { Link } from "react-router-dom"

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Understand Doctrine</h2>

    <h4>Learn</h4>
    <p>
      Write some questions that people outside the Church might have about
      Church beliefs. What doctrinal topics could you study to help answer these
      questions?
    </p>
    <p>
      Review the list of the doctrinal topics you studied as a{" "}
      <Link to="/duty-to-god/deacon/spiritual-strength/understand-doctrine">
        deacon
      </Link>. Based on your experiences and additional study, update your
      outline on “The Priesthood and Priesthood Keys.” Choose four or more
      additional topics (see below) you would like to learn about and teach, and
      write your choices in the next section. You can use the{" "}
      <a href="https://www.lds.org/scriptures/">scriptures</a> (including the{" "}
      <a href="https://www.lds.org/scriptures/tg">Topical Guide</a>),{" "}
      <a href="https://www.lds.org/manual/true-to-the-faith">
        True to the Faith
      </a>,{" "}
      <a href="https://www.lds.org/manual/preach-my-gospel-a-guide-to-missionary-service">
        Preach My Gospel
      </a>, and the words of latter-day prophets to learn about these topics.
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
      or visit <a href="https://dutytogod.lds.org">dutytogod.lds.org</a>
    </p>

    <h4>Act</h4>
    <p>Doctrinal topics I will study:</p>
    <TextArea id="teacherSSDoctrine1" />

    <h4>Share</h4>
    <p>
      Using the outlines you have prepared, teach others about these doctrinal
      topics. This could be in a formal teaching setting (family home evening,
      quorum meeting, seminary, sacrament meeting, or Mutual opening exercises),
      or it could be in a conversation with a friend.
    </p>
    <p>When I will teach about these topics:</p>
    <TextArea id="teacherSSDoctrine2" />
  </div>
);

export default Page;
