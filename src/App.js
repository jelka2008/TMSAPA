import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import ObjectsOnMap from "./component/ObjectsOnMap/ObjectsOnMap";
import LettersAndTasks from "./component/LettersAndTasks/LettersAndTasks";
import HeaderContainer from "./component/Header/HeaderContainer";

class App extends React.Component {
  render() {
    // console.log(this.props.match.params.name);
    return (
      <div className="window-wrapper">
        <div className="header_block">
          <HeaderContainer />
        </div>
        <div className="content-block">
          <Route
            exact
            path="/ObjectsOnMap/:name?"
            render={() => <ObjectsOnMap />}
          />
          <Route path="/LettersAndTasks/" render={() => <LettersAndTasks />} />
        </div>
      </div>
    );
  }
}
export default App;
