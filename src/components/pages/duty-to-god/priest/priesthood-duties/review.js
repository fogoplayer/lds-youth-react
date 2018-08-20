import React from "react";

import Signoff from "../../../../Signoff";

const Page = props => (
  <div>
    <h2>Review</h2>

    <p>
      Near the end of your years as a priest, talk with your parents or a
      priesthood leader about your experiences accomplishing your plans to
      administer priesthood ordinances, serve others, and invite all to come
      unto Christ. Discuss ways you were able to bless others through your
      priesthood service. Talk about how your experiences are helping you become
      a faithful priesthood servant.
    </p>

    <p>My Signature</p>
    <Signoff id="priestPDReview1" />
    <p>Signature of Parent or Leader</p>
    <Signoff id="priestPDReview2" />
  </div>
);

export default Page;
