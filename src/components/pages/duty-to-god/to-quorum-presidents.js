import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

const Page = props => (
  <div>
    <h2>To Quorum Presidents</h2>

    <p>
      The Lord has entrusted you with the priesthood keys for your quorum (see{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/124.142-143">
        D&C 124:142–43
      </a>. Part of your responsibility, as you direct the work of your quorum,
      is to “teach [quorum members] their duty” (see{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/107.85-87">
        D&C 107:85–87
      </a>).
    </p>
    <p>
      This book can be an effective tool to help you teach quorum members their
      priesthood duties and encourage them to strengthen their testimony and
      their relationship with Heavenly Father. Consider the following as you
      help them make and carry out their plans:
    </p>
    <ol>
      <li>
        Soon after a young man joins your quorum, visit him in his home and make
        sure he has a copy of this book. Use the book to give him an overview of
        his priesthood duties. Show him some of your plans and tell him about
        the experiences you are having.
      </li>
      <li>
        Set a good example by making and carrying out your own plans. Share your
        experiences with quorum members.
      </li>
      <li>
        Invite quorum members to share their experiences in quorum meetings, and
        encourage them to share with their families. For example, during the
        first few minutes of quorum meeting you could invite them to share what
        they are learning as they follow their plans to study the scriptures or
        serve others.
      </li>
      <li>
        As you plan quorum meetings and activities, look for ways to include the
        plans your quorum members have made. For example, you could invite a
        quorum member to teach a lesson in quorum meeting about one of the
        doctrines he is studying (see Understand Doctrine for{" "}
        <Link to="/duty-to-god/deacon/spiritual-strength/understand-doctrine">
          deacon
        </Link>,{" "}
        <Link to="/duty-to-god/teacer/spiritual-strength/understand-doctrine">
          teacher
        </Link>, and{" "}
        <Link to="/duty-to-god/teacer/spiritual-strength/understand-doctrinec">
          priest
        </Link>).
      </li>
      <li>
        As you exercise your priesthood keys to help quorum members learn and
        fulfill their duties, your relationship with them will be strengthened.
        When quorum members work closely together, they help each other stay
        strong in the gospel and united as a quorum.
      </li>
    </ol>
  </div>
);

export default Page;
