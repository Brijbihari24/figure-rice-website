import React from 'react';
// Import css files
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './containers/home/Home';
import PageNotFound from './containers/notfound/PageNotFound';
import About from './containers/aboutus/About';

import Shop from './containers/shop/Shop';
import Contact from './containers/contact/Contact';
import SingleProduct from './containers/product/SingleProduct';
import Service from './containers/service/Service';
import SingleService from './containers/service/SingleService';
import Blog from "./containers/blog/Blog"
import SingleBlog from './containers/blog/SingleBlog';
import Privacy from './containers/policy/Privacy';
import Gallery from './containers/gallery/Gallery';
import Faq from './containers/faq/Faq';
import TermsAndConditions from './containers/terms_and_conditions/TermsAndConditions';
import AboutTeam from './containers/aboutus/AboutTeam';
import Media from './containers/media/Media';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/about-team' component={AboutTeam} />
          <Route exact path='/blogs' component={Blog} />
          <Route exact path='/blog/:slug' component={SingleBlog} />
          <Route exact path='/media' component={Media} />

          <Route exact path='/contact-us' component={Contact} />
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
