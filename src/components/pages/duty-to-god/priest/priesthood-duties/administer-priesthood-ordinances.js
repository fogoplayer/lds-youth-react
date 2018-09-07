import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Administer Priesthood Ordinances</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/bofm/3-ne/18.1-11">
        3 Nephi 18:1–11
      </a>{" "}
      and{" "}
      <a href="https://www.lds.org/scriptures/nt/matt/26.26-28">
        Matthew 26:26–28
      </a>. What do you learn from these verses about your duty to administer
      the sacrament?
    </p>
    <TextArea id="text1" />
    <p>
      Thoughtfully read the sacrament prayers (see{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.77">
        D&C 20:77
      </a>,{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.79">79</a>).
      Write down your thoughts about the meaning of the covenants and sacred
      words in these prayers.
    </p>
    <TextArea id="text2" />
    <p>Write your answers to these questions:</p>

    <ol>
      <li>
        As you officiate at the sacrament table, what can you do to set a good
        example for other Aaronic Priesthood holders?
      </li>
      <li>
        {" "}
        What can you do to help make the sacrament a more meaningful experience
        for the members of the congregation?
      </li>
    </ol>

    <TextArea id="text3" />

    <p>
      Attend a baptismal service, and share with a parent or quorum leader what
      you learn about the ordinance of baptism.
    </p>

    <h2>Act</h2>
    <p>
      My plan to set a good example for other Aaronic Priesthood holders as I
      bless the sacrament:
    </p>
    <TextArea id="text4" />
    <p>
      My plan to help make the sacrament a more meaningful experience for the
      members of the congregation:
    </p>
    <TextArea id="text5" />

    <h2>Share</h2>
    <p>
      After following through with your plans, discuss with members of your
      quorum how your experiences have influenced your feelings about the
      sacrament and the Savior.
    </p>
  </div>
);

export default Page;
