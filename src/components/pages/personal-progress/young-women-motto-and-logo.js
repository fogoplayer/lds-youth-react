import React from "react";

const Page = props => (
  <div>
    <h2>Young Women Motto And Logo</h2>

    <div class="row">
      <div class="col s12 l3">
        <center>
          <img
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            src="../images/torch.png"
            alt="Personal Progress Torch"
          />
        </center>
      </div>
      <div class="col s12 l9">
        <p>
          The Young Women motto is "stand for truth and righteousness." The
          Young Women logo is a torch surrounded by the Young Women motto. The
          torch represents the light of Christ, inviting all to come unto Christ
          (<a href="https://www.lds.org/scriptures/bofm/moro/10.32">
            Moroni 10:32
          </a>). It invites all young women to make a commitment to hold up
          their light by being an example and remaining worthy to make and keep
          sacred covenants and receive the ordinances of the temple.
        </p>

        <p float="left">
          <i>
            Arise and shine forth, that thy light may be a standard for the
            nations (<a href="https://www.lds.org/scriptures/dc-testament/dc/115.5">
              D&C 115:5
            </a>).
          </i>
        </p>
      </div>
    </div>
  </div>
);

export default Page;
