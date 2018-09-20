import React from "react";
import "./ViewList.css";

export default class ViewList extends React.Component {
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Cost</th>
              <th />
              <th />
            </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>$100</td>
              <td>
                <button>View</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
