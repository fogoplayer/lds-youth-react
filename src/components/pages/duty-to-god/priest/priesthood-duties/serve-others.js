import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Serve Others</h2>

    <h4>Learn</h4>
    <p>
      Think about the service you have performed in your years as a deacon and
      teacher, and answer the following questions:
    </p>
    <ol>
      <li>
        How did your attitude affect the service you gave? (Review the phrases
        you wrote as a{" "}
        <a href="/LDSYouth/dutyToGod/teacher/teacherPDServe.html">teacher</a>.)
      </li>
      <li>
        How does service help you become less self-centered and more aware of
        others’ needs?
      </li>
      <li>How were the people you served affected by your service?</li>
      <li>What can you do as a priest to give more effective service?</li>
    </ol>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/nt/matt/22.36-40">
        Matthew 22:36–40
      </a>,{" "}
      <a href="https://www.lds.org/scriptures/nt/john/13.34-35">
        John 13:34–35
      </a>, and{" "}
      <a href="https://www.lds.org/scriptures/bofm/mosiah/2.17">Mosiah 2:17</a>,
      looking for reasons we serve others. Discuss with your quorum the
      opportunities you have to serve others (ask your bishop or quorum leaders
      for ideas). List some specific things your quorum will do to give service.
      Also plan several things you will do on your own to serve your family and
      others.
    </p>

    <h2>Act</h2>
    <p>My quorum’s plan to give service:</p>
    <TextArea id="priestPDServe1" />
    <p>My personal plan to give service: </p>
    <TextArea id="priestPDServe2" />

    <h2>Share</h2>
    <p>
      Share with a parent or quorum members some of your experiences serving
      others. For example, you could talk about how your service has affected
      the people you have served and how your attitude has affected your
      experiences. Talk about how these experiences are helping you become more
      Christlike.
    </p>
  </div>
);

export default Page;
