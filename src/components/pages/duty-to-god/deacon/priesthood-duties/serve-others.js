import React from "react";

import TextArea from "../../../../TextArea";

const Page = props => (
  <div>
    <h2>Serve Others</h2>

    <h4>Learn</h4>
    <p>
      Write down what you learn about serving others from the following
      scriptures:{" "}
      <a href="https://www.lds.org/scriptures/nt/james/1.27">James 1:27</a>,{" "}
      <a href="https://www.lds.org/scriptures/bofm/mosiah/2.17">Mosiah 2:17</a>,
      and{" "}
      <a href="https://www.lds.org/scriptures/bofm/mosiah/18.8-10">
        Mosiah 18:8–10
      </a>. Talk with a parent or quorum leader about the relationship between
      being a priesthood holder and serving others
    </p>

    <TextArea id="text1" />

    <p>
      Discuss with members of your quorum the opportunities you have to serve
      others (ask your bishop or quorum leaders for ideas). As an Aaronic
      Priesthood holder, you serve others by assisting your bishop or branch
      president in “administering temporal things” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.68">
        D&C 107:68
      </a>). This may include caring for the poor and needy, cleaning the
      meetinghouse and grounds, gathering fast offerings, and fulfilling
      assignments from your quorum president. It could also include service
      projects you decide to do on your own
    </p>
    <p>
      List some specific things your quorum will do to give service. Also plan
      several things you will do on your own to give service, including service
      to members of your family
    </p>

    <h4>Act</h4>
    <p>My quorum’s plan to give service:</p>
    <TextArea id="text1" />
    <p>My personal plan to give service: </p>
    <TextArea id="text2" />

    <h4>Share</h4>
    <p>
      Share with a parent or quorum members some of your experiences serving
      others. For example, you could talk about how your service has affected
      you and the people you have served.
    </p>
  </div>
);

export default Page;
