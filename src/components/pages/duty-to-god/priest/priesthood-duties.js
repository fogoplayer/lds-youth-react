import React from "react";
import { render } from "react-dom";

import CollectionItem from "../../../CollectionItem";

const Page = props => (
  <div>
    <h2>About</h2>

    <p>
      The Lord has said that every priesthood holder should “learn his duty” and
      “act . . . in all diligence” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.99">
        D&C 107:99
      </a>). This section will help you learn and fulfill your duties as a
      priest, which are outlined in{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/20.46-52">
        Doctrine and Covenants 20:46–52
      </a>,{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/26.75-79">
        75–79
      </a>{" "}
      and which include all the duties of a{" "}
      <a href="/LDSYouth/dutyToGod/deacon/deaconPDAbout.html">deacon</a> and a{" "}
      <a href="/LDSYouth/dutyToGod/teacher/teacherPDAbout.html">teacher</a>.
      Your duties can be organized into three groups:
    </p>

    <h4>Administer Priesthood Ordinances</h4>
    <p>
      Priests officiate at the sacrament table and offer the sacramental
      prayers. They can prepare and pass the sacrament. They can also baptize,
      confer the Aaronic Priesthood, and ordain deacons, teachers, and other
      priests.
    </p>

    <h4>Serve Others</h4>
    <p>
      Priests assist the bishop in “administering . . . temporal things” (<a href="https://www.lds.org/scriptures/dc-testament/dc/107.68">
        D&C 107:68
      </a>). This may include gathering fast offerings, caring for the poor and
      needy, caring for the meetinghouse and grounds, serving as a messenger for
      the bishop, and fulfilling other assignments from the bishop
    </p>

    <h4>Invite All to Come unto Christ</h4>
    <p>
      Priests “preach, teach, expound, exhort, . . . and visit the house of each
      member, and exhort them to pray vocally and in secret and attend to all
      family duties” (<a href="https://www.lds.org/scriptures/dc-testament/dc/20.46-47">
        D&C 20:46–47
      </a>). One way to do this is by serving as a home teacher. Priests also
      continue to “see that there is no iniquity in the church, neither hardness
      with each other, neither lying, backbiting, nor evil speaking” (<a href="https://www.lds.org/scriptures/dc-testament/dc/20.54">
        D&C 20:54
      </a>). This responsibility includes being a peacemaker and being an
      example of moral integrity and uprightness.
    </p>
    <p>
      They continue to “warn, expound, exhort, and teach, and invite all to come
      unto Christ” (<a href="https://www.lds.org/scriptures/dc-testament/dc/20.59">
        D&C 20:59
      </a>). This includes setting a good example, fellowshipping quorum members
      and others, speaking in Church meetings, sharing the gospel, and bearing
      testimony.
    </p>
    <ul className="collection">
      <CollectionItem
        text="Administer Priesthood Ordinances"
        url="/duty-to-god/priest/priesthood-duties/administer-priesthood-ordinances"
      />
      <CollectionItem
        text="Serve Others"
        url="/duty-to-god/priest/priesthood-duties/serve-others"
      />
      <CollectionItem
        text="Invite All to Come Unto Christ"
        url="/duty-to-god/priest/priesthood-duties/invite-all-to-come-unto-christ"
      />
      <CollectionItem
        text="Review"
        url="/duty-to-god/priest/priesthood-duties/review"
      />
    </ul>
  </div>
);

export default Page;
