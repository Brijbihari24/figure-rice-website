import React from 'react'

function BlogCard({ title, image, category }) {

    return (
        <div className="news-item wow fadeInUp delay-0-2s">
            <div className="image">
                <a href="#"><img src={image} alt="News" /></a>
            </div>
            <div className="news-header">
                <div className="title-meta">
                    <h4>
                        <a href="#">{title}</a>
                    </h4>
                    <ul>
                        <li>
                            <i className="far fa-user-circle" />
                            <a href="#">{category}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogCard