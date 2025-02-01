import React from 'react'

function RelatedBlog({ name, image, category }) {
    return (
        <div>
            <div className="nps-item prev-item wow fadeInLeft delay-0-2s">
                <a href="blog-details.html"><img src={image} alt="Servce" /></a>
                <div className="nps-content">
                    <h6><a href="blog-details.html">{name}</a></h6>
                    <span>{category}</span>
                    <a href="blog-details.html" className="read-more">read more</a>
                </div>
            </div>
        </div>
    )
}

export default RelatedBlog