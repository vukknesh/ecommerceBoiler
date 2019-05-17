import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { authCheckState } from "./store/actions/authActions";
import { Container } from "reactstrap";
// scroll page back to top once component updates
import ScrollToTop from "./components/Utilities/ScrollToTop";
// private route (requires authentication)
import PrivateRoute from "./components/Utilities/PrivateRoute";

import { Elements, StripeProvider } from "react-stripe-elements";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import Cart from "./components/Checkout/Cart";
import Checkout from "./components/Checkout/Checkout";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import About from "./components/Layout/About";
import Default from "./components/Layout/Default";

import { apiKey } from "./config/config";

import ProductList from "./components/Products/ProductList";
import ProductDetails from "./components/Products/ProductDetails";
import SearchResults from "./components/Products/SearchResults";
import Profile from "./components/Profiles/Profile";

import "bootstrap/dist/css/bootstrap.min.css";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
  faCcVisa,
  faCcMastercard,
  faCcPaypal
} from "@fortawesome/free-brands-svg-icons";
import {
  faMinusSquare,
  faPlusSquare,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";

import {
  faTruck,
  faShoppingCart,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faPaperPlane,
  faCartPlus,
  faTrashAlt,
  faListAlt,
  faSearch,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
// import PasswordReset from "./components/Authentication/PasswordReset";

library.add(
  faFacebookF,
  faTwitter,
  faLinkedin,
  faPinterest,
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faTruck,
  faShoppingCart,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faPaperPlane,
  faCartPlus,
  faTrashAlt,
  faListAlt,
  faSearch,
  faMinusSquare,
  faPlusSquare,
  faTimesCircle,
  faAngleLeft,
  faAngleRight
);

const mapDispatchToProps = dispatch => {
  return {
    authCheckState: () => dispatch(authCheckState())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.authCheckState();
  }

  render() {
    return (
      <StripeProvider apiKey={apiKey}>
        <Elements>
          <ScrollToTop>
            <Navbar />
            <Container className="content my-4">
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/password_reset" component={PasswordReset} /> */}
                <PrivateRoute path="/profile" component={Profile} />
                <Route exact path="/product/:slug" component={ProductDetails} />
                <Route exact path="/search/:query" component={SearchResults} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/about" component={About} />
                <PrivateRoute exact path="/checkout" component={Checkout} />
                <Route component={Default} />
              </Switch>
            </Container>

            <Footer />
          </ScrollToTop>
        </Elements>
      </StripeProvider>
    );
  }
}

App.propTypes = {
  authCheckState: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(App);
