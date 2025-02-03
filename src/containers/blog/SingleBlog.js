import React, { useEffect } from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import renderHTML from "react-render-html";
import { Link } from 'react-router-dom';
import BlogCard from '../../components/blog/BlogCard';



function SingleBlog() {
    return (
        <div>
            <Header />
            single blog
            <Footer />
        </div>
    )
}

export default SingleBlog