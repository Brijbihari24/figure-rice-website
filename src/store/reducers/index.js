import { combineReducers } from "redux";
import alert from "./alert_reducer";
import auth from "./auth_reducer";
import { banner_reducer } from "./banner_reducer";

import { contact_reducer } from "./contact_reducer";
import { category_reducer } from "./category_reducer";
import { collection_reducer } from "./collection_reducer";
import { service_reducer } from "./service_reducer";
import { blog_reducer } from "./blog_reducer";
import { mobilebanner_reducer } from "./mobilebanner_reducer";
import { testimonial_reducer } from "./testimonial_reducer";
import { appointment_reducer } from "./appointment_reducer";
import { webpage_reducer } from "./webpage_reducer";
import { faq_reducer } from "./faq_reducer";


export default combineReducers({
  alert,
  auth,
  banner: banner_reducer,
  contact: contact_reducer,
  category: category_reducer,
  collection: collection_reducer,
  service: service_reducer,
  blog: blog_reducer,
  mobilebanner: mobilebanner_reducer,
  testimonial: testimonial_reducer,
  appointment: appointment_reducer,
  webpage: webpage_reducer,
  faq: faq_reducer,
});
