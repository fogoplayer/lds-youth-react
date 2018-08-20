import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Pray and Study the Scriptures</h2>

    <h4>Learn</h4>
    <p>
      Ponder the following questions, and consider writing your answers in a
      notebook or study journal:
    </p>
    <ol>
      <li>
        What effect do consistent prayer and studying the scriptures have on (a)
        your ability to keep the commandments? (b) your relationship with your
        family? (c) your relationship with God?
      </li>
      <li>What scripture passages are especially meaningful to you? Why?</li>
      <li>
        What specific things did you learn from the living prophets in the most
        recent general conference? How has following this counsel blessed you?
      </li>
    </ol>
    <TextArea id="priestSSScriptures1" />
    <p>
      On the next page, write your plans to have meaningful prayer and scripture
      study during your years as a priest. Your scripture study could include
      the words of the living prophets in the conference issues of the Ensign or
      Liahona.
    </p>

    <h4>Act</h4>
    <p>
      My plan for strengthening my habit of regular prayer and scripture study:
    </p>
    <TextArea id="priestSSScriptures2" />

    <h4>Share</h4>
    <p>
      Share what you are learning from your scripture study. For example, you
      could share with your family, with friends, in seminary, or in quorum
      meetings. Make sharing what you learn a regular practice. This will
      strengthen your testimony and help you learn how to teach the gospel. It
      will also strengthen the testimony of others.
    </p>
  </div>
);

export default Page;
