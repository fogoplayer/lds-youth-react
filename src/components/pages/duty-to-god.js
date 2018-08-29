/* global M */
import React from "react";

import CollapsibleHeader from "../../components/CollapsibleHeader";
import CollectionItem from "../../components/CollectionItem";

class page extends React.Component {// eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elems = document
      .getElementById("content")
      .querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }

  render() {
    return (
      <div id="content">
        <h2>Duty To God</h2>
        <ul className="collection">
          <CollectionItem
            text="Message From the First Presidency"
            url="duty-to-god/message-from-the-first-presidency"
          />
          <CollectionItem
            url="duty-to-god/your-duty-to-god"
            text="Your Duty to God"
          />
          <li
            className="collection-item"
            style={{
              padding: 0,
              border: 0
            }}
          >
            <ul
              class="collapsible expandable z-depth-0"
              style={{
                margin: 0,
                border: "none"
              }}
            >
              <li>
                <CollapsibleHeader text="Deacon" />
                <div class="collapsible-body">
                  <ul className="collection">
                    <CollectionItem
                      url="duty-to-god/deacon/spiritual-strength"
                      text="Spiritual Strength"
                    />
                    <CollectionItem
                      url="duty-to-god/deacon/priesthood-duties"
                      text="Preisthood Duties"
                    />
                    <CollectionItem
                      url="duty-to-god/deacon/ftsoy"
                      text="For the Strength Of Youth: Physical Health"
                    />
                  </ul>
                </div>
              </li>
              <li>
                <CollapsibleHeader text="Teacher" />
                <div class="collapsible-body">
                  <ul className="collection">
                    <CollectionItem
                      url="duty-to-god/teacher/spiritual-strength"
                      text="Spiritual Strength"
                    />
                    <CollectionItem
                      url="duty-to-god/teacher/priesthood-duties"
                      text="Preisthood Duties"
                    />
                    <CollectionItem
                      url="duty-to-god/teacher/ftsoy"
                      text="For the Strength Of Youth: Education"
                    />
                  </ul>
                </div>
              </li>
              <li>
                <CollapsibleHeader text="Priest" />
                <div class="collapsible-body">
                  <ul className="collection">
                    <CollectionItem
                      url="duty-to-god/priest/spiritual-strength"
                      text="Spiritual Strength"
                    />
                    <CollectionItem
                      url="duty-to-god/priest/priesthood-duties"
                      text="Preisthood Duties"
                    />
                    <CollectionItem
                      url="duty-to-god/priest/ftsoy"
                      text="For the Strength Of Youth: Family and Friends"
                    />
                    <CollectionItem
                      url="duty-to-god/priest/preparing-to-receive-the-melchizedek-priesthood"
                      text="Preparing to Recieve the Melchizedek Priesthood"
                    />
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <CollectionItem
            url="duty-to-god/to-quorum-presidents"
            text="To Quorum Presidents"
          />
          <CollectionItem
            url="duty-to-god/to-quorum-advisers-and-parents"
            text="To Quorum Advisers and Parents"
          />
          <li
            className="collection-item"
            style={{
              padding: 0,
              border: 0
            }}
          >
            <ul
              class="collapsible expandable z-depth-0"
              style={{
                margin: 0,
                border: "none"
              }}
            >
              <li>
                <CollapsibleHeader text="Appendix" />
                <div class="collapsible-body">
                  <ul className="collection">
                    <CollectionItem
                      url="duty-to-god/appendix/aaronic-priesthood-ordinances"
                      text="Aaronic Priesthood Ordinances"
                    />
                    <CollectionItem
                      url="duty-to-god/appendix/the-living-christ"
                      text="The Living Christ: The Testimony of the Apostles"
                    />
                    <CollectionItem
                      url="duty-to-god/appendix/the-family-proclamation"
                      text="The Family: A Proclamation To The World"
                    />
                    <CollectionItem
                      url="duty-to-god/appendix/notes"
                      text="Notes"
                    />
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default page;
