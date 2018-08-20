import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Live Worthily</h2>
        
        <h4>Learn</h4>
        <p>Read the section titled âRepentanceâ
        in For the Strength of Youth, and write
        your answers to the following questions
        in a notebook or journal:</p>
        <ol>
          <li>What do you learn about the
          Atonement and repentance from
          this section?</li>
          <li>How does repentance help you grow spiritually?</li>
          <li>What is the relationship between repentance, the Atonement,
          and personal worthiness?</li>
        </ol>
        <TextArea id="deaconSSWorthily1" />
        <p>Discuss your answers with your parents or quorum members.
        Discuss how repentance will help you prepare to enter
        the temple and participate in sacred ordinances.</p>
        <p>Choose at least three other sections from For the Strength of
        Youth that will help you live worthily. Study the standards
        in these sections, and write what you will do to live these
        standards and to help others do the same.</p>
        
        <h4>Act</h4>
        <p>Sections from For the Strength of Youth I will study</p>
        <TextArea id="deaconSSWorthily2" />
        <p>Specific things I will do to live these standards and help others
        do the same:</p>
        <TextArea id="deaconSSWorthily3" />
        
        <h4>Share</h4>
        <p>After studying and applying these
        standards, share with your parents
        or quorum members what you are
        learning, how it is influencing your
        life, and the kind of person you are
        becoming.</p>
  </div>
);

export default Page;
