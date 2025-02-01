import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import { URI } from "../../domain/constant";
import { useSelectAllBlog } from "../../shared/hooks/UseBlog";
import { Link } from "react-router-dom";
import BlogCard from '../../components/blog/BlogCard';
import { Helmet } from 'react-helmet';

function Blog({ match }) {
    const [data] = useSelectAllBlog();
    const { all_blogs, all_blogs_loading } = data;
    return (
        <div>
            <Header />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Skin Care Blog by Rejuve Aesthetic Clinic, Guwahati</title>
                <meta name="description" content="Rejuve Aesthetic Clinic Blog. Expert Advise on Skin, Medifacial, Dermatology and Dentistry Services. Free Skin Care Tips from Top Dermatologist in Guwahati."
                />
            </Helmet>
            <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(/assets/images/banner_image.jpg)' }}>
                <div className="container">
                    <div className="banner-inner text-center">
                        <span className="bg-text">Blogs</span>
                        <h1 className="page-title wow fadeInUp delay-0-2s">Blogs</h1>
                        {
                            //   <nav aria-label="breadcrumb">
                            //   <ol className="breadcrumb wow fadeInUp delay-0-4s">
                            //     <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            //     <li className="breadcrumb-item active">{title}</li>
                            //   </ol>
                            // </nav>
                        }
                    </div>
                </div>
            </section>
            <section className="blog-grid-section py-150 rpy-100">
                <div className="container">
                    <div className="row">
                        {
                            all_blogs && all_blogs.map((item) => {
                                return (
                                    <div className='col-xl-4 col-md-6'>
                                        <Link to={`/blog/${item.slug}`}>
                                            <BlogCard title={item.title} image={`${URI}${item.image}`} category={item.category && item.category.name} />
                                        </Link>
                                    </div>

                                )
                            })
                        }
                        {
                            // TODO:Old Blog Card
                            // <div className="col-xl-4 col-md-6">
                            //     <div className="blog-grid-item wow fadeInUp delay-0-2s">
                            //         <div className="image">
                            //             <a href="blog-details.html"><img src="assets/images/news/blog-1.jpg" alt="blog" /></a>
                            //         </div>
                            //         <div className="blog-grid-content">
                            //             <ul>
                            //                 <li><a href="#">25 january 2022</a></li>
                            //                 <li><a href="#">Beauty</a></li>
                            //             </ul>
                            //             <h5><a href="blog-details.html">Smashing Podcast Episode Chris Ferdinande Web</a></h5>
                            //             <a href="blog-details.html" className="theme-btn style-seven">Learn more <i className="fas fa-long-arrow-alt-right" /></a>
                            //         </div>
                            //     </div>
                            // </div>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blog