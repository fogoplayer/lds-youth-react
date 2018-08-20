import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Administer Priesthood Ordinances</h2>

    <h4>Learn</h4>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/38.42">
        Doctrine and Covenants 38:42
      </a>. The command “Be ye clean that bear the vessels of the Lord” has
      special meaning as you fulfill your duty to prepare the sacrament.
      Anciently a group of priests carried vessels— bowls or basins—to be used
      in the temple (see{" "}
      <a href="https://www.lds.org/scriptures/ot/ezra/1.5-11">Ezra 1:5–11</a>).
      Today you handle vessels that contain the sacramental bread and water in
      remembrance of the Atonement of Jesus Christ.
    </p>
    <p>
      Read{" "}
      <a href="https://www.lds.org/scriptures/nt/matt/26.26-28">
        Matthew 26:26–28
      </a>. On the next page, write your answers to these questions:
    </p>
    <ol>
      <li>
        What can you do to prepare the sacrament in a reverent and dignified
        manner (even though most people will not see you perform this duty)?
      </li>
      <li>
        How can you set a good example for the deacons when you are asked to
        pass the sacrament?
      </li>
    </ol>

    <h4>Act</h4>
    <p>My plan to prepare the sacrament in a reverent and dignified manner:</p>
    <TextArea id="teacherPDAdminister1" />
    <p>
      My plan to set a good example for deacons when I am asked to pass the
      sacrament:
    </p>
    <TextArea id="teacherPDAdminister2" />

    <h4>Share</h4>
    <p>
      After following through with your plan, discuss with members of your
      quorum how your experiences have infl uenced your feelings about the
      sacrament and the Savior.
    </p>
  </div>
);

export default Page;
