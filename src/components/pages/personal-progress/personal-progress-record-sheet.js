import React from "react";

import Signoff from "../../Signoff";

const Page = props => (
  <div>
    <h2>Personal Progress Record Sheet</h2>

    <div className="tableContainer">
      <table>
        <tr>
          <td />
          <td className="progressCell">Faith</td>
          <td className="progressCell">
            Divine<br />Nature
          </td>
          <td className="progressCell">
            Individual<br />Worth
          </td>
          <td className="progressCell">Knowledge</td>
          <td className="progressCell">
            Choice<br />and<br />Accountability
          </td>
          <td className="progressCell">
            Good<br />Works
          </td>
          <td className="progressCell">Integrity</td>
          <td className="progressCell">Virtue</td>
        </tr>

        <tr>
          <td className="progressCell">Value Experience</td>
          <td className="progressCell" id="faith1" />
          <td className="progressCell" id="divineNature1" />
          <td className="progressCell" id="individualWorth1" />
          <td className="progressCell" id="Knowledge1" />
          <td className="progressCell" id="choiceAndAccountability1" />
          <td className="progressCell" id="goodWorks1" />
          <td className="progressCell" id="integrity1" />
          <td className="progressCell" id="virtue1" />
        </tr>

        <tr>
          <td className="progressCell">Value Experience</td>
          <td className="progressCell" id="faith2" />
          <td className="progressCell" id="divineNature2" />
          <td className="progressCell" id="individualWorth2" />
          <td className="progressCell" id="Knowledge2" />
          <td className="progressCell" id="choiceAndAccountability2" />
          <td className="progressCell" id="goodWorks2" />
          <td className="progressCell" id="integrity2" />
          <td className="progressCell" id="virtue2" />
        </tr>

        <tr>
          <td className="progressCell">Value Experience</td>
          <td className="progressCell" id="faith3" />
          <td className="progressCell" id="divineNature3" />
          <td className="progressCell" id="individualWorth3" />
          <td className="progressCell" id="Knowledge3" />
          <td className="progressCell" id="choiceAndAccountability3" />
          <td className="progressCell" id="goodWorks3" />
          <td className="progressCell" id="integrity3" />
          <td className="progressCell" id="virtue3" />
        </tr>

        <tr>
          <td className="progressCell">Value Experience</td>
          <td className="progressCell" id="faith4" />
          <td className="progressCell" id="divineNature4" />
          <td className="progressCell" id="individualWorth4" />
          <td className="progressCell" id="Knowledge4" />
          <td className="progressCell" id="choiceAndAccountability4" />
          <td className="progressCell" id="goodWorks4" />
          <td className="progressCell" id="integrity4" />
          <td className="progressCell" id="virtue4" />
        </tr>

        <tr>
          <td className="progressCell">Value Experience</td>
          <td className="progressCell" id="faith5" />
          <td className="progressCell" id="divineNature5" />
          <td className="progressCell" id="individualWorth5" />
          <td className="progressCell" id="Knowledge5" />
          <td className="progressCell" id="choiceAndAccountability5" />
          <td className="progressCell" id="goodWorks5" />
          <td className="progressCell" id="integrity5" />
          <td className="progressCell" id="virtue5" />
        </tr>

        <tr>
          <td className="progressCell">Value Experience</td>
          <td className="progressCell" id="faith6" />
          <td className="progressCell" id="divineNature6" />
          <td className="progressCell" id="individualWorth6" />
          <td className="progressCell" id="Knowledge6" />
          <td className="progressCell" id="choiceAndAccountability6" />
          <td className="progressCell" id="goodWorks6" />
          <td className="progressCell" id="integrity6" />
          <td className="progressCell" id="virtue6" />
        </tr>

        <tr>
          <td className="progressCell">Value Project</td>
          <td className="progressCell" id="faithVP" />
          <td className="progressCell" id="divineNatureVP" />
          <td className="progressCell" id="individualWorthVP" />
          <td className="progressCell" id="KnowledgeVP" />
          <td className="progressCell" id="choiceAndAccountabilityVP" />
          <td className="progressCell" id="goodWorksVP" />
          <td className="progressCell" id="integrityVP" />
          <td className="progressCell" id="virtueVP" />
        </tr>
      </table>
    </div>

    <p>Young Womanhood Recognition Date:</p>
    <Signoff />
  </div>
);

export default Page;
