import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Invite All to Come Unto Christ</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.53">
        Doctrine and Covenants 20:53
      </a>. As part of your duty to “watch over the church always, and be with
      and strengthen them,” you will now have the opportunity to serve as a home
      teacher. Discuss with your quorum president, your parents, or your home
      teaching companion what you could do to become a good home teacher.
    </p>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/bofm/alma/17.2-3">Alma 17:2–3</a>,{" "}
      <a href="https://www.lds.org/scriptures/bofm/alma/17.9">9</a>, and write
      what the sons of Mosiah did to prepare themselves for missionary service.
      Consider ways you can follow their example.
    </p>

    <TextArea id="teacherPDInvite1" />

    <p>
      Continue your efforts to share the gospel. Think about family members and
      friends whom you could invite to come unto Christ. Write their names and
      what you will do to help them (such as inviting them to a Church activity
      or giving them a copy of the Book of Mormon or a Church magazine).
    </p>

    <h4>Act</h4>
    <p>My plan to become a good home teacher:</p>
    <TextArea id="teacherPDInvite2" />
    <p>Names of people and how I will help them come unto Christ:</p>
    <TextArea id="teacherPDInvite3" />

    <h4>Share</h4>
    <p>
      After following through with your plans, share with a parent or quorum
      leaders the experiences you have had serving as a home teacher and sharing
      the gospel. Talk about how these experiences are helping you prepare to
      become a full-time missionary.
    </p>
  </div>
);

export default Page;
