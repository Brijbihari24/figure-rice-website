import React, { useEffect } from 'react';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './containers/home/Home';
import { loadUser } from './store/actions/auth';
import setAuthToken from './domain/setAuthToken';
import BeforeLoginRoutes from './shared/Routes/BeforeLoginRoutes';
import PrivateRoutes from './shared/Routes/PrivateRoutes';
import PageNotFound from './containers/notfound/PageNotFound';
import About from './containers/aboutus/About';

import Shop from './containers/shop/Shop';
import Contact from './containers/contact/Contact';
import SingleProduct from './containers/product/SingleProduct';

import SingleCollection from './containers/collections/SingleCollection';
import SignUp from './containers/authentication/SignUp';
import SignIn from './containers/authentication/SignIn';
import ForgetPassword from './containers/authentication/ForgetPassword';
import ResetPassword from './containers/authentication/ResetPassword';
import ThankYou from './containers/thank-you/ThankYou';
import Service from './containers/service/Service';
import SingleService from './containers/service/SingleService';
import Blog from "./containers/blog/Blog"
import SingleBlog from './containers/blog/SingleBlog';
import BookAppointment from './containers/Book_appointment/BookAppointment';
import Privacy from './containers/policy/Privacy';
import Gallery from './containers/gallery/Gallery';
import Faq from './containers/faq/Faq';
import Collection from './containers/collections/Collection';
import TermsAndConditions from './containers/terms_and_conditions/TermsAndConditions';

function App() {
  useEffect(() => {
    //First we have to bring(get that) token, which is saved in local storage
    const token = localStorage.getItem('token');
    //then we will pass that token in setAuthToken method
    setAuthToken(token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/services' component={Service} />
          <Route exact path='/service/:slug' component={SingleService} />
          <Route exact path='/blogs' component={Blog} />
          <Route exact path='/blogs' component={Blog} />
          <Route exact path='/blog/:slug' component={SingleBlog} />
          <Route exact path='/book-appointment' component={BookAppointment} />

          <BeforeLoginRoutes exact path='/sign-up' component={SignUp} />
          <BeforeLoginRoutes
            exact
            path='/forget-password'
            component={ForgetPassword}
          />
          <Route
            exact
            path='/reset-password/:token'
            component={ResetPassword}
          />
          <BeforeLoginRoutes exact path='/login' component={SignIn} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/thank-you' component={ThankYou} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/concerns' component={Collection} />
          <Route exact path='/collections/:slug' component={SingleCollection} />
          <Route exact path='/privacy-policy' component={Privacy} />
          <Route exact path='/terms-and-conditions' component={TermsAndConditions} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/faqs' component={Faq} />

          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
