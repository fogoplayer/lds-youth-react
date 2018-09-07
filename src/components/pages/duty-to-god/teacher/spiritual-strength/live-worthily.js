import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Live Worthily</h2>

    <h4>Learn</h4>
    <p>
      Search{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/121.41-45">
        Doctrine and Covenants 121:41–45
      </a>, and write down principles that govern the use of the priesthood.
      Then do the following (ask for help from a parent or priesthood leader if
      possible):{" "}
    </p>
    <ol>
      <li>Look for the definition of any unfamiliar words.</li>
      <li>Think of examples of how to apply these principles</li>
    </ol>
    <p>
      Search verses{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/88.45-46">
        45 and 46
      </a>, and identify the blessings that come from living these principles.
      Repeat steps 1 and 2 above for each of these blessings.
    </p>

    <TextArea id="text1" />

    <p>
      Study{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/63.16">
        Doctrine and Covenants 63:16
      </a>{" "}
      and identify the consequences of having unclean thoughts. Contrast these
      warnings with the blessings of letting “virtue garnish [your] thoughts
      unceasingly” (<a href="https://www.lds.org/scriptures/dc-testament/dc/121.45">
        D&C 121:45
      </a>). Choose at least four sections from For the Strength of Youth to
      study; consider focusing on the sections that will help you have virtuous
      thoughts. In particular, ponder what you can do to avoid the dangers
      described in{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/63.16">
        Doctrine and Covenants 63:16.
      </a>
    </p>

    <h4>Act</h4>
    <p>Sections from For the Strength of Youth I will study</p>
    <TextArea id="text2" />
    <p>
      Specific things I will do to live these standards and help others do the
      same:
    </p>
    <TextArea id="text3" />

    <h4>Share</h4>
    <p>
      Share with a parent or quorum leader how living these standards has
      affected you and influenced those around you. As you share, talk about the
      kind of person you are becoming.
    </p>
  </div>
);

export default Page;
