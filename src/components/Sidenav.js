/* global M */
import React from "react";
import { Link } from "react-router-dom";
class Sidenav extends React.Component { // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //Automatically open menu on page load
    const expandSidenav = function(node) {
      document.querySelectorAll(".collapsible-header").forEach(node => {
        if (window.location.href.includes(node.href)) {
          node.parentNode.classList.add("active");
        } else {
          node.parentNode.classList.remove("active");
        }
      });
    };
    expandSidenav(document.getElementById("sidenav"));
    window.addEventListener("popstate", expandSidenav);

    //Initialize materialize components
    let elems = document
      .getElementById("sidenav")
      .querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
    elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});

    //Add indentation
    elems[0]
      .querySelectorAll(".indent-2")
      .forEach(e => (e.style.padding = `0 23.5px 0 ${16 + 15 * 2}px`));
    elems[0]
      .querySelectorAll(".indent-3")
      .forEach(e => (e.style.padding = `0 23.5px 0 ${16 + 15 * 3}px`));
  }
  render() {
    this.screenWidth = document.body.clientWidth;
    return (
      <ul className="sidenav sidenav-fixed" id="sidenav">
        <li className="no-padding">
          <ul className="collapsible">
            <li>
              <Link to="/duty-to-god" className="collapsible-header">
                Duty To God
              </Link>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/duty-to-god/message-from-the-first-presidency">
                      Message from the First Presidency
                    </Link>
                  </li>
                  <li>
                    <Link to="/duty-to-god/message-from-the-first-presidency">
                      Your Duty To God
                    </Link>
                  </li>
                  <li>
                    <ul className="collapsible">
                      <li>
                        <Link
                          to="/duty-to-god/deacon"
                          className="collapsible-header"
                        >
                          Deacon
                        </Link>
                        <div className="collapsible-body">
                          <ul>
                            <li>
                              <ul className="collapsible">
                                <li>
                                  <Link
                                    to="/duty-to-god/deacon/spiritual-strength"
                                    className="collapsible-header indent-2"
                                  >
                                    Spiritual Strength
                                  </Link>
                                  <div className="collapsible-body">
                                    <ul>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/spiritual-strength/pray-and-study"
                                          className="indent-3"
                                        >
                                          Pray and Study the Scriptures
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/spiritual-strength/live-worthily"
                                          className="indent-3"
                                        >
                                          Live Worthily
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/spiritual-strength/understand-doctrine"
                                          className="indent-3"
                                        >
                                          Understand Doctrine
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/spiritual-strength/review"
                                          className="indent-3"
                                        >
                                          Review
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul className="collapsible">
                                <li>
                                  <Link
                                    to="/duty-to-god/deacon/priesthood-duties"
                                    className="collapsible-header indent-2"
                                  >
                                    Priesthood Duties
                                  </Link>
                                  <div className="collapsible-body">
                                    <ul>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/priesthood-duties/administer-priesthood-ordinances"
                                          className="indent-3"
                                        >
                                          Administer Priesthood Ordinan...
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/priesthood-duties/serve-others"
                                          className="indent-3"
                                        >
                                          Serve Others
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/priesthood-duties/invite-all-to-come-unto-christ"
                                          className="indent-3"
                                        >
                                          Invite All to Come Unto Christ
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/deacon/priesthood-duties/review"
                                          className="indent-3"
                                        >
                                          Review
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link
                                to="/duty-to-god/deacon/ftsoy"
                                className="indent-2"
                              >
                                FTSOY: Physical Health
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="collapsible">
                      <li>
                        <Link
                          to="/duty-to-god/teacher"
                          className="collapsible-header"
                        >
                          Teacher
                        </Link>
                        <div className="collapsible-body">
                          <ul>
                            <li>
                              <ul className="collapsible">
                                <li>
                                  <Link
                                    to="/duty-to-god/teacher/spiritual-strength"
                                    className="collapsible-header indent-2"
                                  >
                                    Spiritual Strength
                                  </Link>
                                  <div className="collapsible-body">
                                    <ul>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/spiritual-strength/pray-and-study"
                                          className="indent-3"
                                        >
                                          Pray and Study the Scriptures
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/spiritual-strength/live-worthily"
                                          className="indent-3"
                                        >
                                          Live Worthily
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/spiritual-strength/understand-doctrine"
                                          className="indent-3"
                                        >
                                          Understand Doctrine
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/spiritual-strength/review"
                                          className="indent-3"
                                        >
                                          Review
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="/duty-to-god/teacher/priesthood-duties"
                                    className="collapsible-header indent-2"
                                  >
                                    Priesthood Duties
                                  </Link>
                                  <div className="collapsible-body">
                                    <ul>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/priesthood-duties/administer-priesthood-ordinances"
                                          className="indent-3"
                                        >
                                          Administer Priesthood Ordinan...
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/priesthood-duties/serve-others"
                                          className="indent-3"
                                        >
                                          Serve Others
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/priesthood-duties/invite-all-to-come-unto-christ"
                                          className="indent-3"
                                        >
                                          Invite All to Come Unto Christ
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/teacher/priesthood-duties/review"
                                          className="indent-3"
                                        >
                                          Review
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="/duty-to-god/teacher/ftsoy"
                                    className="indent-2"
                                  >
                                    FTSOY: Physical Health
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="collapsible">
                      <li>
                        <Link
                          to="/duty-to-god/priest"
                          className="collapsible-header"
                        >
                          Priest
                        </Link>
                        <div className="collapsible-body">
                          <ul>
                            <li>
                              <ul className="collapsible">
                                <li>
                                  <Link
                                    to="/duty-to-god/priest/spiritual-strength"
                                    className="collapsible-header indent-2"
                                  >
                                    Spiritual Strength
                                  </Link>
                                  <div className="collapsible-body">
                                    <ul>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/spiritual-strength/pray-and-study"
                                          className="indent-3"
                                        >
                                          Pray and Study the Scriptures
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/spiritual-strength/live-worthily"
                                          className="indent-3"
                                        >
                                          Live Worthily
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/spiritual-strength/understand-doctrine"
                                          className="indent-3"
                                        >
                                          Understand Doctrine
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/spiritual-strength/review"
                                          className="indent-3"
                                        >
                                          Review
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="/duty-to-god/priest/priesthood-duties"
                                    className="collapsible-header indent-2"
                                  >
                                    Priesthood Duties
                                  </Link>
                                  <div className="collapsible-body">
                                    <ul>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/priesthood-duties/administer-priesthood-ordinances"
                                          className="indent-3"
                                        >
                                          Administer Priesthood Ordinan...
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/priesthood-duties/serve-others"
                                          className="indent-3"
                                        >
                                          Serve Others
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/priesthood-duties/invite-all-to-come-unto-christ"
                                          className="indent-3"
                                        >
                                          Invite All to Come Unto Christ
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="/duty-to-god/priest/priesthood-duties/review"
                                          className="indent-3"
                                        >
                                          Review
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link
                                to="/duty-to-god/priest/ftsoy"
                                className="indent-2"
                              >
                                FTSOY: Family and Friends
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/duty-to-god/priest/preparing-to-recieve-the-melchizedek-priesthood"
                                className="indent-2"
                              >
                                Preparing to Receive the Melchi...
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/duty-to-god/to-quorum-presidents">
                      To Quorum Presidents
                    </Link>
                  </li>
                  <li>
                    <Link to="/duty-to-god/to-quorum-advisers-and-parents">
                      To Quorum Advisers and Parents
                    </Link>
                  </li>
                  <li>
                    <ul className="collapsible">
                      <li>
                        <Link
                          to="/duty-to-god/appendix"
                          className="collapsible-header"
                        >
                          Appendix
                        </Link>
                        <div className="collapsible-body">
                          <ul>
                            <li>
                              <ul className="collapsible">
                                <li>
                                  <Link
                                    to="/duty-to-god/appendix/aaronic-priesthood-ordinances"
                                    className="collapsible-header indent-2"
                                  >
                                    Aaronic Priesthood Ordinances
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/duty-to-god/appendix/the-living-christ"
                                    className="collapsible-header indent-2"
                                  >
                                    The Living Christ: The Testimony o...
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/duty-to-god/appendix/the-family"
                                    className="collapsible-header indent-2"
                                  >
                                    The Family: A Proclamation to the...
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/duty-to-god/appendix/notes"
                                    className="collapsible-header indent-2"
                                  >
                                    Notes
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/personal-progress" className="collapsible-header">
                Personal Progress
              </Link>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/personal-progress/welcome-to-personal-progress">
                      Welcome to Personal Progress
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/young-women-motto-and-logo">
                      YW Motto and Logo
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/young-women-theme">
                      YW Theme
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/young-women-classes-and-symbols">
                      YW Classes and Symbols
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/">Overview for YW</Link>
                  </li>
                  <li>
                    <ul className="collapsible">
                      <li>
                        <Link
                          to="/personal-progress/values"
                          className="collapsible-header"
                        >
                          YW Value Experiences and Projects
                        </Link>
                        <div className="collapsible-body">
                          <ul>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/faith"
                              >
                                {" "}
                                Faith
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/divine-nature"
                              >
                                {" "}
                                Divine Nature
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/individual-worth"
                              >
                                {" "}
                                Individual Worth
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/knowledge"
                              >
                                {" "}
                                Knowledge
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/choice-and-accountability"
                              >
                                {" "}
                                Choice and Accountability
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/good-works"
                              >
                                {" "}
                                Good Works
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/integrity"
                              >
                                {" "}
                                Integrity
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="indent-2"
                                to="/personal-progress/values/virtue"
                              >
                                {" "}
                                Virtue
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/personal-progress/young-womanhood-recognition">
                      Young Womanhood Recognition
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/personal-progress-record-sheet">
                      Personal Progress Record Sheet
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/my-testimony">
                      My Testimony
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/completion-of-personal-progress">
                      Completion of Personal Progress
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/recommendation-for-young-womanhood-recognition">
                      Recommendation for Young Womanh...
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/what-do-i-do-when-i-complete-personal-progress">
                      What Do I Do When I Complete Perso...
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/overview-for-parents-and-leaders">
                      Overview For Parents and Leaders
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/scripture-index">
                      Scripture Index
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/subject-index">
                      Subject Index
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/the-family">
                      The Family: A Proclamation to the...
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/the-living-christ">
                      The Living Christ: The Testimony o...
                    </Link>
                  </li>
                  <li>
                    <Link to="/personal-progress/my-journal">My Journal</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
export default Sidenav;
