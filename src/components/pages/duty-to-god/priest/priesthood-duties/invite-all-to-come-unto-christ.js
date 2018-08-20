import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Invite All to Come Unto Christ</h2>

    <h4>Learn</h4>
    <p>
      Review the{" "}
      <a href="/LDSYouth/dutyToGod/teacher/teacherPDInvite.html">plan</a> you
      made to become a good home teacher. Looking back on your home teaching
      efforts, what do you feel you have done well? On the next page, write some
      ways you want to improve.
    </p>
    <p>
      Write your answers to the following questions, and discuss them with your
      parents or quorum members:
    </p>

    <ol>
      <li>
        How does your example affect your ability to teach the gospel to others?
      </li>
      <li>
        What can you do as a priest to teach the gospel through your actions as
        well as your words?
      </li>
    </ol>

    <p>
      Continue in your efforts to share the gospel. Think about family members
      and friends whom you could invite to come unto Christ. Write down their
      names and what you will do to help them. Include names of Aaronic
      Priesthood holders who aren’t actively participating in the Church.
    </p>

    <h2>Act</h2>
    <p>My plan to improve as a home teacher:</p>
    <TextArea id="priestPDInvite1" />
    <p>Names of people and how I will help them come unto Christ:</p>
    <TextArea id="priestPDInvite2" />

    <h2>Share</h2>
    <p>
      Share with your parents or a priesthood leader the experiences you have as
      you help others come unto Christ. Discuss how this is helping you prepare
      for a full-time mission and become a lifelong missionary.
    </p>
  </div>
);

export default Page;
