import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Serve Others</h2>

    <h4>Learn</h4>
    <p>
      Contrast Nephi’s attitude with that of Laman and Lemuel as they responded
      to assignments (see{" "}
      <a href="https://www.lds.org/scriptures/bofm/1-ne/2.16-18">
        1 Nephi 2:16–18
      </a>; <a href="https://www.lds.org/scriptures/bofm/1-ne/3.1-7">3:1–7</a>,{" "}
      <a href="https://www.lds.org/scriptures/bofm/1-ne/3.28-31">28–31</a>;{" "}
      <a href="https://www.lds.org/scriptures/bofm/1-ne/4.1-2">4:1–2</a>;{" "}
      <a href="https://www.lds.org/scriptures/bofm/1-ne/17.7-19">17:7–19</a>,{" "}
      <a href="https://www.lds.org/scriptures/bofm/1-ne/17.50-51">50–51</a>;{" "}
      <a href="https://www.lds.org/scriptures/bofm/1-ne/18.1-4">18:1–4</a>). In
      the space below, write several phrases from your study that represent the
      attitude we should have when fulfilling responsibilities. Consider sharing
      your list with members of your quorum.
    </p>
    <TextArea
      id="teacherPDServe1"
      placeholder="Example: &quot;Let us be faithful&quot; (1 Nephi 4:1)"
    />
    <p>
      With your quorum, discuss opportunities you have to serve others (ask your
      bishop or quorum leaders for ideas). List some specific things your quorum
      will do to give service. Also plan several things you will do on your own
      to give service, including service to members of your family.
    </p>

    <h4>Act</h4>
    <p>My quorum’s plan to give service:</p>
    <TextArea id="teacherPDServe2" />
    <p>My personal plan to give service: </p>
    <TextArea id="teacherPDServe3" />

    <h4>Share</h4>
    <p>
      Share with a parent, leader, or quorum members some of your experiences
      serving others. For example, you could talk about how your service has
      affected the people you have served and how your attitude has affected
      your experiences. You could also talk about how these experiences are
      helping you serve Jesus Christ (see{" "}
      <a href="https://www.lds.org/scriptures/nt/matt/25.35-40">
        Matthew 25:35–40
      </a>) and become more like Him.
    </p>
  </div>
);

export default Page;
