import React from "react";

import Signoff from "../../../../Signoff";

const Page = props => (
  <div>
    <h2>Review</h2>

    <p>
      Near the end of your years as a priest, talk with your parents or a
      priesthood leader about your experiences accomplishing your plans to pray
      and study the scriptures, live worthily, and understand doctrine. Discuss
      how doing these things is helping you strengthen your testimony and your
      relationship with Heavenly Father.
    </p>

    <p>My Signature</p>
    <Signoff id="sign1" />
    <p>Signature of Parent or Leader</p>
    <Signoff id="sign2" />
  </div>
);

export default Page;
