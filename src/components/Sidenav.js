import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
class Sidenav extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //Initialize materialize components
    let elems = document
      .getElementById("sidenav")
      .querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
    elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
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
                    <ul className="collapsible">
                      <li>
                        <Link to="/duty-to-god" className="collapsible-header">
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
                              <ul class="collapsible">
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
                                          to="/duty-to-god/deacon/priesthood-duties/invite"
                                          className="indent-3"
                                        >
                                          Invite Others to Come Unto Christ
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
                    <ul className="collapsible">
                      <li>
                        <Link to="/duty-to-god" className="collapsible-header">
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
                                          to="/duty-to-god/teacher/priesthood-duties/invite"
                                          className="indent-3"
                                        >
                                          Invite Others to Come Unto Christ
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
                    <ul className="collapsible">
                      <li>
                        <Link to="/duty-to-god" className="collapsible-header">
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
                                          to="/duty-to-god/priest/priesthood-duties/invite"
                                          className="indent-3"
                                        >
                                          Invite Others to Come Unto Christ
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
                          </ul>
                        </div>
                      </li>
                    </ul>
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
