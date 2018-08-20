import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Invite All to Come Unto Christ</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.59">
        Doctrine and Covenants 20:59
      </a>. What does the phrase âcome unto Christâ mean to you? Share your
      thoughts and feelings with a quorum leader or your parents, and ask what
      the phrase means to them.
    </p>
    <p>
      Contrast the missionary stories of Ammon (<a href="https://www.lds.org/scriptures/bofm/alma/17">
        Alma 17â19
      </a>) and Corianton (<a href="https://www.lds.org/scriptures/bofm/alma/39.1-11">
        Alma 39:1â11
      </a>). What influence did their actions have on the people they taught?
      Consider ways you can set a good example that can help people come unto
      Christ.
    </p>
    <p>
      Think about family members and friends whom you could invite to come unto
      Christ. Write down their names and what you will do to help them (such as
      inviting them to a Church activity or giving them a copy of the Book of
      Mormon or a Church magazine).
    </p>

    <h4>Act</h4>
    <p>Ways I will set a good example for others:</p>
    <TextArea id="deaconPDInvite1" />
    <p>Names of people and how I will help them come unto Christ:</p>
    <TextArea id="deaconPDInvite2" />

    <h4>Share</h4>
    <p>
      Write down in a journal or a notebook the experiences you have as you
      invite others to come unto Christ. Also write down ways you feel you are
      becoming a better missionary. Consider sharing your experiences with
      others.
    </p>
  </div>
);

export default Page;
