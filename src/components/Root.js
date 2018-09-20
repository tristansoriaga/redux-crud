import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import history from "./history";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "./HomeContent";
import EditList from "../EditList";
import CreateList from "../containers/CreateList";
import ViewProfile from "../containers/ViewProfile";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={HomeContent} />
        <Route path="/create-list" component={CreateList} />
        <Route path="/edit-list" component={EditList} />
        <Route path="/view-profile" component={ViewProfile} />
        <Footer />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
