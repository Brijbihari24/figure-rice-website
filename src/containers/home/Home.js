import React from "react";
import Header from "../../components/common/header/Header";
import Banner from "../../components/banner/Banner"
import HomeAbout from "../../components/home_about/HomeAbout";
import OurRange from "../../components/range/OurRange";
import Story from "../../components/story/Story";
import Shweta from "../../components/shweta/Shweta"
import Category from "../../components/category/Category";
import Dillipasand from "../../components/dilli/Dillipasand";
import ContactForm from "../contact/ContactForm";
import Testimonial from "../../components/testimonial/Testimonial";
import Features from "../../components/features/Features";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/common/footer/Footer";
import InstagramPost from "../../components/InstagramEmbed/InstagramPost";
import Stat from "../../components/stat/Stat";
import Contactus from "../../components/contactus/Contactus";

function Home() {

  return (
    <div>
      <Header />
      <Banner />
      <HomeAbout />
      <OurRange />
      <Shweta />
      <Category />
      <Features />
      <Blog />
      <Story />
      <Dillipasand />
      <Contactus />
      <Testimonial />
      <Stat />
      <Footer />
    </div>

  );
}

export default Home;
