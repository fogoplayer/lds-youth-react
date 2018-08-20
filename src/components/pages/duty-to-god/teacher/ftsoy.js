import React from "react";
import { render } from "react-dom";

import TextArea from "../../../TextArea";
import Signoff from "../../../Signoff";

const Page = props => (
  <div>
    <h2>For The Strength Of Youth: Education</h2>

    <p>
      After you have begun working on your plans in “<a href="/LDSYouth/dutyToGod/teacher/teacherSS.html">
        Spiritual Strength
      </a>” and “<a href="/LDSYouth/dutyToGod/teacher/teacherPD.html">
        Priesthood Duties
      </a>,” create a project based on the standards in the “<a href="https://www.lds.org/youth/for-the-strength-of-youth/education">
        Education
      </a>” section of For the Strength of Youth. Use the steps on the following
      pages as a guide. Your project should be challenging and should include a
      significant time commitment. It should also be based on your own needs and
      interests. It should help you establish a pattern of lifelong learning.
    </p>

    <h4>Step One: Learn</h4>
    <p>
      To learn about the importance of gaining knowledge, study the section
      titled “
      <a href="https://www.lds.org/youth/for-the-strength-of-youth/education">
        Education
      </a>” in For the Strength of Youth and{" "}
      <a href="https://www.lds.org/scriptures/dc-testament/dc/88.77-80">
        Doctrine and Covenants 88:77–80
      </a>,
      <a href="https://www.lds.org/scriptures/dc-testament/dc/88.118">118</a>.
      Identify from these verses (a) what the Lord wants you to learn, (b) why
      He wants you to learn, and (c) how He wants you to approach learning. Read
      “<a href="/LDSYouth/dutyToGod/proclamationToTheWorld">
        The Family: A Proclamation to the World
      </a>,” and identify your role as a future husband and father.
    </p>
    <p>
      Write your answers to the following questions, and discuss them with your
      parents or quorum members:
    </p>
    <ol>
      <li>What are the benefits of gaining an education?</li>
      <li>
        How will gaining an education help you fulfill your priesthood duties
        (including as a missionary, as a husband, as a father, and in your
        service to others)?
      </li>
    </ol>

    <TextArea id="teacherFTSOY1" />

    <h4>Step 2: Create a Project</h4>
    <p>
      Create a project that will help you apply what you have learned about
      gaining an education. It should include two parts: (1) plans to gain an
      education and (2) plans to explore future occupation options. Have a
      parent or leader approve your project before you begin working on it. Here
      are some examples of things you could include in each part of your
      project:
    </p>

    <h5>Examples-Education</h5>
    <ol>
      <li>
        Make a list of things you do well in school. Then make a list of things
        you could do to be more successful in school. Do those things, and note
        the difference it makes in your performance, your attitude about school,
        and so on.
      </li>
      <li>
        Make a plan to gain an education or training. Consider including in your
        plan what schools you would like to attend or training you’d like to
        receive. Also include what you have to do to be admitted to your school
        or training program and what options exist to finance this education.
      </li>
      <li>
        Pick a topic you’re interested in that you aren’t learning in school,
        and research that topic independently. Share what you learn in a
        presentation or a written paper.
      </li>
    </ol>

    <h5>Examples-Occupation</h5>
    <ol>
      <li>
        Learn about occupations or careers that interest you. This might include
        touring job sites and interviewing people who work there.
      </li>
      <li>
        Visit a local LDS employment resource center, and talk to a staff member
        about some of the future occupations or careers you are considering. Ask
        him or her what you would need to do to get a job in those fields. Share
        what you learn in a quorum meeting or Mutual activity.
      </li>
      <li>
        If you have income, develop and follow a personal savings and spending
        plan. It should include paying tithing and saving money for a mission.
        Share your plan with your parents or quorum members
      </li>
    </ol>

    <h5>My Project</h5>
    <p>Regular Exercise</p>
    <TextArea id="teacherFTSOY2" />
    <p>Nutrition</p>
    <TextArea id="teacherFTSOY3" />

    <p>Approval of a Parent or Leader</p>
    <Signoff id="teacherFTSOYSignoff1" />
    <p>Estimated Date of Completion</p>
    <Signoff id="teacherFTSOYSignoff2" />
    <p>My Signature</p>
    <Signoff id="teacherFTSOYSignoff3" />
    <p>Date Completed</p>
    <Signoff id="teacherFTSOYSignoff4" />

    <h4>Step 3: Report Your Experiences</h4>
    <p>
      In the space below, write what you have learned from carrying out your
      project and how it has prepared you for your future responsibilities.
      Report on your experiences to your family or quorum members.
    </p>
    <TextArea id="teacherFTSOY3" />
  </div>
);

export default Page;
