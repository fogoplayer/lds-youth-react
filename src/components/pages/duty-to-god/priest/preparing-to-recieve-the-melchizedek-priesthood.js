import React from "react";

import TextArea from "../../../TextArea";
import Signoff from "../../../Signoff";

const Page = props => (
  <div>
    <h2>Preparing to Recieve the Melchizedek Priesthood</h2>

    <p id="learn">
      During your years as a priest, use the steps on the following pages to
      create a project that will help you prepare to receive the Melchizedek
      Priesthood and serve a full-time mission. This project builds on what you
      have accomplished throughout your years as an Aaronic Priesthood holder.
      It should be challenging and should include a significant time commitment.
      It should also be based on your own needs and circumstances.
    </p>

    <h4>Step One: Learn</h4>
    <p>
      When you receive the Melchizedek Priesthood, you enter into the oath and
      covenant of the priesthood. To learn about this oath and covenant, read{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/84.33-44">
        Doctrine and Covenants 84:33–44
      </a>{" "}
      and “<a href="https://www.lds.org/manual/true-to-the-faith/melchizedek-priesthood">
        Melchizedek Priesthood
      </a>” in True to the Faith. Then, with help from your bishop or your
      parents, plan a time when you can teach others what you have learned (for
      example, in priests quorum meeting, sacrament meeting, or family home
      evening).
    </p>

    <p>
      One important duty of the Melchizedek Priesthood is to preach the gospel
      (see{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/53.2">D&C 53:3</a>).
      To prepare for this duty, find out what will be required of you when you
      serve a full-time mission. Consider the following:
    </p>
    <ol>
      <li>Personal worthiness and testimony.</li>
      <li>Gospel knowledge.</li>
      <li>Christlike attributes.</li>
      <li>Work habits and physical health.</li>
    </ol>

    <p>
      To learn about the requirements for missionary service, use the following
      sources: your parents, your bishop, returned missionaries, the Missionary
      Handbook, Preach My Gospel, and talks by General Authorities (some of
      these talks can be found at{" "}
      <a href="https://dutytogod.lds.org/">dutytogod.lds.org</a>). Write down
      what you learn.
    </p>

    <h4>Step 2: Create a Project</h4>
    <p>
      Create a project that will help you apply what you’ve learned. It should
      include two parts: (1) preparation to receive the Melchizedek Priesthood
      and (2) preparation for a full-time mission. Have a parent or leader
      approve your project before you begin working on it. Here are some
      examples of things you could include in each part of your project:
    </p>

    <h5>Examples-Melchizedek Priesthood</h5>
    <ol>
      <li>
        Read the entire Book of Mormon. In a journal, write what you learn from
        your study and write specific examples from your life that show how
        consistent scripture study gives you power to resist temptation.
      </li>
      <li>
        Interview three Melchizedek Priesthood holders (such as your father or
        the elders quorum president in your ward). Ask them questions such as
        the following, and write their answers:
        <ol>
          <li>What are the duties of an elder?</li>
          <li>
            What is the difference between having the authority of the
            priesthood and holding priesthood keys?
          </li>
          <li>
            What would you recommend I do to understand and prepare to receive
            the Melchizedek Priesthood?
          </li>
          <li>
            What experiences have you had in which you were able to serve others
            by exercising the Melchizedek Priesthood?
          </li>
          <li>How has holding the Melchizedek Priesthood blessed your life?</li>
          <li>
            How do you perform the ordinances of the Melchizedek Priesthood
            (such as consecrating oil, administering to the sick, and bestowing
            the gift of the Holy Ghost)?
          </li>
        </ol>
      </li>
    </ol>

    <h5>Examples-Full-Time Mission</h5>
    <ol>
      <li>
        Find examples of missionaries in the scriptures (such as the Savior,
        Enoch, Ammon, and Samuel the Lamanite). Identify what made them
        effective, the promises they received, and the effect their work had on
        the people they served. Make a list of what you find. Share your list
        with a returned missionary. Ask him or her to share experiences from his
        or her mission that illustrate these principles and attributes.
      </li>
      <li>
        Practice teaching some of the lessons in{" "}
        <a href="https://www.lds.org/manual/preach-my-gospel-a-guide-to-missionary-service/what-do-i-study-and-teach">
          chapter 3 of Preach My Gospel
        </a>. Schedule regular opportunities to go teaching with the full-time
        missionaries in your area, and be prepared to help the missionaries
        teach.
      </li>
      <li>
        Interview three returned missionaries. Ask them questions such as the
        following, and write their answers:
        <ol>
          <li>
            What would you recommend I do to prepare for a fulltime mission?
          </li>
          <li>
            What qualities make a missionary effective, and what can I do to
            develop those qualities?
          </li>
          <li>How is your life different now because you served a mission?</li>
        </ol>
      </li>
      <li>
        Refer to{" "}
        <a href="/LDSYouth/dutyToGod/priest/melchizedek.html#learn">
          what you wrote
        </a>{" "}
        about the requirements for missionary service, and make a plan to
        improve in each area (personal worthiness and testimony, gospel
        knowledge, Christlike attributes, and work habits and physical health).
      </li>
    </ol>

    <h5>My Project</h5>
    <p>Melchizedek Priesthood</p>
    <TextArea id="melchizedek1" />
    <p>Full-Time Mission</p>
    <TextArea id="melchizedek2" />

    <p>Approval of a Parent or Leader</p>
    <Signoff id="melchizedekSignoff1" />
    <p>Estimated Date of Completion</p>
    <Signoff id="melchizedekSignoff2" />
    <p>My Signature</p>
    <Signoff id="melchizedekSignoff3" />
    <p>Date Completed</p>
    <Signoff id="melchizedekSignoff4" />

    <h4>Step 3: Report Your Experiences</h4>
    <p>
      In the space below, write what you have learned from carrying out your
      project and how it has helped you become a better disciple of Jesus
      Christ. Report on what you learned to your family or quorum members.
    </p>
  </div>
);

export default Page;
