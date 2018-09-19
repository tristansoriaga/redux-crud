import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "./HomeContent";
import CreateList from "../CreateList";
import EditList from "../EditList";
import ViewProfile from "../ViewProfile";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={HomeContent} />
        <Route path="/create-list" component={CreateList} />
        <Route path="/edit-list" component={EditList} />
        <Route path="/view-profile" component={ViewProfile} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
