import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Administer Priesthood Ordinances</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.76-79">
        Doctrine and Covenants 20:76â79
      </a>. What do the sacramental bread and water represent? Read
      <a href="https://www.lds.org/scriptures/nt/luke/22.19-20">
        Luke 22:19â20
      </a>{" "}
      and{" "}
      <a href="https://www.lds.org/scriptures/bofm/3-ne/18.1-11">
        3 Nephi 18:1â11
      </a>. Whom do you represent when you pass the sacrament?
    </p>

    <TextArea id="deaconPDAdminister1" />

    <p>
      Ask your parents or your quorum leaders the following questions, and write
      their answers:
    </p>

    <ol>
      <li>What does the ordinance of the sacrament mean to you?</li>
      <li>
        What can I do as a deacon to help you have a meaningful experience with
        the sacrament?
      </li>
    </ol>

    <TextArea id="deaconPDAdminister2" />

    <p>
      After counseling with your quorum, write in the next section what you will
      do to pass the sacrament in a way that shows reverence for the Savior and
      His Atonement and encourages others to show the same reverence. Also write
      what you will do to have a more meaningful experience when you partake of
      the sacrament.
    </p>

    <h4>Act</h4>
    <p>
      Several things I will do to show reverence when I pass the sacrament and
      to encourage others to show the same reverence:
    </p>
    <TextArea id="deaconPDAdminister3" />
    <p>
      What I will do to have a more meaningful experience when I partake of the
      sacrament:
    </p>
    <TextArea id="deaconPDAdminister4" />

    <h4>Share</h4>
    <p>
      After following through with your plan, discuss with members of your
      quorum how your experiences with the sacrament have helped you become more
      reverent.
    </p>
  </div>
);

export default Page;
