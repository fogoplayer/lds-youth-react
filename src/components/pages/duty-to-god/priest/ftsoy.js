import React from "react";

import TextArea from "../../../TextArea";
import Signoff from "../../../Signoff";

const Page = props => (
  <div>
    <h2>For The Strength Of Youth: Family and Friends</h2>

    <p>
      After you have begun working on your plans in “<a href="/LDSYouth/dutyToGod/priest/priestSS.html">
        Spiritual Strength
      </a>” and “<a href="LDSYouth/dutyToGod/priest/priestPD.html">
        Priesthood Duties
      </a>,” create a project based on the standards in the “<a href="https://www.lds.org/youth/for-the-strength-of-youth/family">
        Family
      </a>” and “<a href="https://www.lds.org/youth/for-the-strength-of-youth/friends">
        Friends
      </a>” sections of For the Strength of Youth. Use the steps on the
      following pages as a guide. Your project should be challenging and should
      include a significant time commitment. It should also be based on your own
      needs and interests. It should be focused on choosing friends wisely and
      learning how to treat others, especially your family members, in a
      Christlike way.
    </p>

    <h4>Step One: Learn</h4>
    <p>
      Study <a href="https://www.lds.org/scriptures/nt/matt/5">Matthew 5–7</a>{" "}
      or <a href="https://www.lds.org/scriptures/bofm/3-ne/12">3 Nephi 12–14</a>{" "}
      and make a list of what the Savior taught about how to treat others. Then
      find examples in the scriptures where Christ or others exemplified some of
      these principles. Read “<a href="https://www.lds.org/youth/for-the-strength-of-youth/family">
        Family
      </a>” and “<a href="https://www.lds.org/youth/for-the-strength-of-youth/friends">
        Friends
      </a>” in For the Strength of Youth, and find phrases that express these
      principles.
    </p>
    <TextArea id="text1" />
    <p>
      Write your answers to the following questions, and share them with your
      parents or quorum members:
    </p>
    <ol>
      <li>
        How is your priesthood service different when you love those you serve?
      </li>
      <li>
        What experiences have you had in which someone showed Christlike love
        for you?
      </li>
      <li>How can you show your love for family members and others?</li>
    </ol>

    <TextArea id="text2" />

    <h4>Step 2: Create a Project</h4>
    <p>
      Create a project that will help you apply what you have learned about
      loving others. It should include two parts: (1) plans to improve your
      relationship with your family and (2) plans to be a better friend. Have a
      parent or leader approve your project before you begin working on it. Here
      are some examples of things you could include in each part of your
      project:
    </p>

    <h5>Examples-Family</h5>
    <ol>
      <li>
        Make a list of ways you can help build a happy home. Base your list on
        the standards in the “<a href="https://www.lds.org/youth/for-the-strength-of-youth/family">
          Family
        </a>” section of For the Strength of Youth (for example, be cheerful,
        helpful, and considerate; be a peacemaker; and honor your parents). Do
        those things, and record the difference it makes in your home.
      </li>
      <li>
        Plan an activity with a family member with whom you would like to
        improve your relationship. For example, you could take an interest in
        his or her hobbies, find a place to talk, or play games together.
      </li>
    </ol>

    <h5>Examples-Friends</h5>
    <ol>
      <li>
        Make a list of things you can do to be a better friend. For examples,
        see the “<a href="https://www.lds.org/youth/for-the-strength-of-youth/friends">
          Friends
        </a>” section of For the Strength of Youth. Do those things, and record
        the difference it makes in your relationships. If appropriate, include
        names of specific people in your list.
      </li>
      <li>
        Interview a mother, grandmother, sister, or other woman to learn about
        how to show proper respect to women. Make a plan to apply what you
        learn. Note how carrying out your plan improves your relationship with
        women. Here are some questions you might ask:
        <ol>
          <li>How can a son show proper respect for his mother?</li>
          <li>
            How can an Aaronic Priesthood holder show proper respect for young
            women?
          </li>
          <li>
            How can a young man show proper respect for his future wife before
            and after they are married?
          </li>
        </ol>
      </li>
      <li>
        Invite a new convert, a friend of another faith, or a less-active member
        to attend a Church activity with you. Help him or her feel welcome and
        included.
      </li>
    </ol>

    <h5>My Project</h5>
    <p>Family</p>
    <TextArea id="text3" />
    <p>Friends</p>
    <TextArea id="text4" />

    <p>Approval of a Parent or Leader</p>
    <Signoff id="sign1" />
    <p>Estimated Date of Completion</p>
    <Signoff id="sign2" />
    <p>My Signature</p>
    <Signoff id="sign3" />
    <p>Date Completed</p>
    <Signoff id="sign4" />

    <h4>Step 3: Report Your Experiences</h4>
    <p>
      In the space below, write what you have learned from carrying out your
      project and how it has helped you become a better disciple of Jesus
      Christ. Report on what you learned to your family or quorum members.
    </p>
    <TextArea id="text5" />
  </div>
);

export default Page;
