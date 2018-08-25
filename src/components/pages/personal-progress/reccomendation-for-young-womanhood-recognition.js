import React from "react";

const Page = props => (
  <div>
    <h2>Reccomendation for Young Womanhood Recognition</h2>
    Name
    <Signoff id="name" />
    <p>
      has faithfully completed all the requirements necessary to receive the
      Young Womanhood Recognition. She honors her commitment to live the
      commandments and the standards of The Church of Jesus Christ of Latter-day
      Saints as stated in{" "}
      <a href="https://lds.org/youth/for-the-strength-of-youth">
        For the Strength of Youth
      </a>. She has strengthened her faith in Jesus Christ and her testimony of
      His gospel. She is committed to keeping her baptismal covenants and is
      preparing to make sacred temple covenants.
    </p>
    <p>Signature of bishop or branch president</p>
    <Signoff id="bishopSignature" />
    <p>Date</p>
    <Signoff id="bishopSignatureDate" />
  </div>
);

export default Page;
