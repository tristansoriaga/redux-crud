import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

import MainNav from "../MainNav";
import App from "../App";
import CreateList from "../CreateList";
import EditList from "../EditList";
import ViewProfile from "../ViewProfile";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MainNav />
        <Route exact path="/" component={App} />
        <Route path="/create-list" component={CreateList} />
        <Route path="/edit-list" component={EditList} />
        <Route path="/view-profile" component={ViewProfile} />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
