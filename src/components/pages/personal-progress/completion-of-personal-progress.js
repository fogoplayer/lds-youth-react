import React from "react";

const Page = props => (
  <div>
    <h2>Completion of Personal Progress</h2>

    <p>
      I have completed the requirements necessary to receive the Young Womanhood
      Recognition. As I continue to progress, I will keep the commandments,
      serve others, and develop and share my gifts and talents. As I do this, I
      will be prepared to strengthen my home and family and be worthy and
      prepared to receive the ordinances of the temple.
    </p>

    <p>Signature of Young Woman</p>
    <Signoff id="signature" />
    <p>Date</p>
    <Signoff id="youngWomanSignatureDate" />
  </div>
);

export default Page;
