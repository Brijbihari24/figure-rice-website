import React, { useEffect } from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import {
    useSingleBlog,
    useSingleBlogBySlug,
    useSelectAllBlog,
    useSimilarBlogsByID,
} from "../../shared/hooks/UseBlog";
import renderHTML from "react-render-html";
import { URI } from '../../domain/constant';
import { Link } from 'react-router-dom';
import RelatedBlog from './RelatedBlog';
import BlogCard from '../../components/blog/BlogCard';
import Breadcrum from '../../components/breadcrum/Breadcrum';
import { Helmet } from 'react-helmet';


function SingleBlog({ match }) {
    const [data] = useSingleBlogBySlug(match.params.slug);
    const { blog, blog_loading } = data;
    console.log("SERVICE", blog);

    const [blog_data_similar, getSimilarBlogByID] = useSimilarBlogsByID()
    useEffect(() => {
        if (blog && blog._id) {
            getSimilarBlogByID(blog._id)
        }
    }, [blog])
    const { similar_blogs, similar_blogs_loading } = blog_data_similar;
    console.log("Similar Blogs -", similar_blogs);

    const [blog_data] = useSelectAllBlog();
    const { all_blogs, all_blogs_loading } = blog_data;

    console.log("All Blogs -", all_blogs);

    return (
        <div>
            <Header />
            {blog && (
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{blog.meta_title}</title>
                    <meta name="description" content={blog.meta_desc} />

                </Helmet>
            )}

            {
                !blog_loading ? blog && (
                    <>
                        <Breadcrum bg_heading={"Blogs"} page_title={blog.title} breadcrumb_image={blog.banner_image} />
                        <section className="blog-details-area py-150 rpy-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="blog-list-item blog-details-content">
                                            <div className="image wow fadeInUp delay-0-2s">
                                                <img src={`${URI}${blog.image}`} alt="blog" />
                                            </div>
                                            <div className="blog-list-content wow fadeInUp delay-0-4s">
                                                {renderHTML(blog.description)}
                                                <hr />
                                                <section className="similar-products">
                                                    <div className="container">
                                                        <div className="similar-products-heading ptb-15px">
                                                            <h3>Similar Services</h3>
                                                        </div>
                                                        <div className="row">

                                                            {similar_blogs && similar_blogs.map((item) => {
                                                                return (
                                                                    <div className="col-md-4">
                                                                        <Link to={`/blog/${item.slug}`}>
                                                                            <BlogCard
                                                                                title={item.title}
                                                                                image={`${URI}${item.image}`}
                                                                                category={item.category && item.category.name}
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="blog-sidebar rmt-75">
                                            <div className="widget category-widget wow fadeInUp delay-0-2s">
                                                <h5 className="widget-title">All Blogs</h5>
                                                <ul>
                                                    {all_blogs && all_blogs.map((item) => {
                                                        return (
                                                            <li><Link to={`/blog/${item.slug}`}>
                                                                {item.title}<span className="fas fa-long-arrow-alt-right" />
                                                            </Link></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>

                ) : (
                    <div></div>
                )
            }


            <Footer />
        </div>
    )
}

export default SingleBlog