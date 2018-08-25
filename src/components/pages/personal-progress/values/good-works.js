import React from "react";

const Page = props => (
  <div>
    <h2 class="yellow-text text-darken-1">Good Works</h2>

    <h5>
      <em>
        <p>
          Seek learning, even by study and also by faith (<a href="https://lds.org/scriptures/dc-testament/dc/88.118">
            D&C 88:118
          </a>).
        </p>
        <p>I will continually seek opportunities for learning and growth.</p>
      </em>
    </h5>

    <h4 class="yellow-text text-darken-1">Required Value Experiences</h4>
    <p>
      Complete the following three required value experiences. Have your parent
      or leader sign and date each experience after you finish.
    </p>

    <ol>
      <li>
        Learn why service is a fundamental principle of the gospel. Read{" "}
        <a href="https://lds.org/scriptures/nt/matt/5.13-16">Matthew 5:13â16</a>;{" "}
        <a href="https://lds.org/scriptures/nt/matt/25.34-40">25:34â40</a>;{" "}
        <a href="https://lds.org/scriptures/nt/gal/6.9-10">Galatians 6:9â10</a>;{" "}
        <a href="https://lds.org/scriptures/nt/james/1.22-27">James 1:22â27</a>;{" "}
        <a href="https://lds.org/scriptures/bofm/mosiah/2.17">Mosiah 2:17</a>;{" "}
        <a href="https://lds.org/scriptures/bofm/mosiah/4.26">4:26</a>; and{" "}
        <a href="https://lds.org/scriptures/bofm/3-ne/13.1-4">3 Nephi 13:1â4</a>.
        Others often give service you may not notice, such as preparing meals,
        reading to or listening to younger children, repairing clothing, or
        helping a brother or sister. For two weeks record in your journal the
        quiet acts of service your family members and others perform.
        Acknowledge their service in some meaningful way.
        <Signoff color="yellow" id="goodWorksSignoff1" />
        <TextArea id="goodWorksGoal1" />
      </li>

      <li>
        Service is an essential principle of family living. Help plan your
        familyâs menus, obtain the food, and prepare part of the meals for two
        weeks. During that time help your family gather to share mealtimes.
        Report to your class what you have learned.
        <Signoff color="yellow" id="goodWorksSignoff2" />
      </li>

      <li>
        Read{" "}
        <a href="https://lds.org/scriptures/bofm/mosiah/18.7-10">
          Mosiah 18:7â10
        </a>, and in your journal list three ways you can comfort others or help
        them bear their burdens. Do the things on your list, and tell a family
        member or leader about the experience and how your attitude and
        understanding have changed.
        <Signoff color="yellow" id="goodWorksSignoff3" />
        <TextArea id="goodWorksGoal2" />
      </li>
    </ol>

    <h4 class="yellow-text text-darken-1">Additional Value Experiences</h4>
    <p>
      Complete three additional value experiences. You may select from the
      following options or write up to two of your own. Your parent or leader
      must approve those you write yourself before you begin. Have your parent
      or leader sign and date each experience after you finish.
    </p>

    <ol start="4">
      <li>
        Teach a lesson about service in family home evening or in another
        setting. Use pictures, music, examples, or demonstrations in your
        lesson. You may want to use the manual{" "}
        <a href="https://www.lds.org/manual/teaching-no-greater-call-a-resource-guide-for-gospel-teaching">
          Teaching, No Greater Call
        </a>{" "}
        as a resource.
        <Signoff color="yellow" id="goodWorksSignoff4" />
      </li>

      <li>
        Read{" "}
        <a href="https://lds.org/scriptures/dc-testament/dc/58.26-28">
          Doctrine and Covenants 58:26â28
        </a>. Think of ways a young woman, as well as a wife and mother, could
        apply this scripture in her family. Develop a pattern of service in your
        life by choosing a family member you can help. Serve that person for at
        least a month. Record in your journal your actions and feelings about
        how this improved your relationship with that person.
        <Signoff color="yellow" id="goodWorksSignoff5" />
        <div contextmenu="true" class="textArea" id="goodWorksGoal5" />
      </li>

      <li>
        Spend at least three hours giving service outside your family. Ask your
        ward or branch Relief Society president or a community leader for
        suggestions for service. For example, you might take care of children
        while parents attend the temple; collect, make, or recondition toys or
        games for a nursery; accept an assignment to clean the meetinghouse; or
        perform errands for or read to a homebound person or others in need.
        Record in your journal the reactions of the person you served and
        possible goals for future service opportunities.
        <Signoff color="yellow" id="goodWorksSignoff6" />
        <TextArea id="goodWorksGoal6" />
      </li>

      <li>
        Through your good works, others will see your example and may want to
        know more about the gospel. Pray for a missionary experience. Read{" "}
        <a href="https://lds.org/scriptures/nt/matt/24.14">Matthew 24:14</a>;{" "}
        <a href="https://lds.org/scriptures/nt/matt/28.19">28:19</a>; and{" "}
        <a href="https://lds.org/scriptures/dc-testament/dc/88.81">
          Doctrine and Covenants 88:81
        </a>. Invite a friend who is not a member of the Church or one who is
        less active to go with you to a Church meeting or activity. Introduce
        your friend to others, and make sure he or she is involved. Share your
        testimony of the gospel, and invite him or her to come again.
        <Signoff color="yellow" id="goodWorksSignoff7" />
      </li>
    </ol>

    <h4 class="yellow-text text-darken-1">Personalized Value Experiences</h4>

    <ol start="8">
      <li>
        <TextArea id="goodWorksGoal8" />
        <Signoff color="yellow" id="goodWorksSignoff8" />
      </li>
      <li>
        <TextArea id="goodWorksGoal9" />
        <Signoff color="yellow" id="goodWorksSignoff9" />
      </li>
    </ol>

    <h4 class="yellow-text text-darken-1">Value Project</h4>

    <p>
      After you have completed six good works value experiences, create a
      project that will help you practice what you have learned. This should be
      a significant effort that will take at least ten hours to complete.
      Prayerfully seek the guidance of the Holy Ghost to select a meaningful
      project.
    </p>

    <p>
      <TextArea id="goodWorksGoalVP" />
    </p>
    <Signoff color="yellow" id="goodWorksSignoffVP" />
  </div>
);

export default Page;