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
        <h2>Personal Progress</h2>
        <ul className="collection">
          <CollectionItem
            text="Welcome to Personal Progress"
            url="/personal-progress/welcome-to-personal-progress"
          />
          <CollectionItem
            text="Young Women Motto and Logo"
            url="/personal-progress/young-women-motto-and-logo"
          />
          <CollectionItem
            text="Young Women Theme"
            url="/personal-progress/young-women-theme"
          />
          <CollectionItem
            text="Young Women Classes and Symbols"
            url="/personal-progress/young-women-classes-and-symbols"
          />
          <CollectionItem
            text="Overview for Young Women"
            url="/personal-progress/overview-for-young-women"
          />
          <li
            className="collection-item"
            style={{
              padding: 0,
              border: 0
            }}
          >
            <ul
              className="collapsible expandable z-depth-0"
              style={{
                margin: 0,
                border: "none"
              }}
            >
              <li>
                <CollapsibleHeader text="Young Women Value Experiences and Projects" />
                <div className="collapsible-body">
                  <ul className="collection">
                    <CollectionItem
                      text="Faith"
                      url="/personal-progress/values/faith"
                    />
                    <CollectionItem
                      text="Divine Nature"
                      url="/personal-progress/values/divine-nature"
                    />
                    <CollectionItem
                      text="Individual Worth"
                      url="/personal-progress/values/individual-worth"
                    />
                    <CollectionItem
                      text="Knowledge"
                      url="/personal-progress/values/knowledge"
                    />
                    <CollectionItem
                      text="Choice and Accountability"
                      url="/personal-progress/values/choice-and-accountability"
                    />
                    <CollectionItem
                      text="Good Works"
                      url="/personal-progress/values/good-works"
                    />
                    <CollectionItem
                      text="Integrity"
                      url="/personal-progress/values/integrity"
                    />
                    <CollectionItem
                      text="Virtue"
                      url="/personal-progress/values/virtue"
                    />
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <CollectionItem
            text="Young Womanhood Recognition"
            url="/personal-progress/young-womanhood-recognition"
          />
          <CollectionItem
            text="Personal Progress Record Sheet"
            url="/personal-progress/personal-progress-record-sheet"
          />
          <CollectionItem
            text="My Testimony"
            url="/personal-progress/my-testimony"
          />
          <CollectionItem
            text="Completion of Personal Progress"
            url="/personal-progress/completion-of-personal-progress"
          />
          <CollectionItem
            text="Recommendation for Young Womanhood Recognition"
            url="/personal-progress/recommendation-for-young-womanhood-recognition"
          />
          <CollectionItem
            text="What Do I Do When I Complete Personal Progress?"
            url="/personal-progress/what-do-i-do-when-i-complete-personal-progress"
          />
          <CollectionItem
            text="Overview For Parents and Leaders"
            url="/personal-progress/overview-for-parents-and-leaders"
          />
          <CollectionItem
            text="Scripture Index"
            url="/personal-progress/scripture-index"
          />
          <CollectionItem
            text="Subject Index"
            url="/personal-progress/subject-index"
          />
          <CollectionItem
            text="The Family: A Proclamation to the World"
            url="/personal-progress/the-family"
          />
          <CollectionItem
            text="The Living Christ: The Testimony of the Apostles"
            url="/personal-progress/the-living-christ"
          />
          <CollectionItem
            text="My Journal"
            url="/personal-progress/my-journal"
          />
        </ul>
      </div>
    );
  }
}

export default page;
