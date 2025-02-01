import React from 'react'

function CollectionCard({ name, image }) {
    return (
        <div>
            <div className="service-item wow fadeInUp delay-0-2s">
                <img src={image} alt="Service" />
                <div className="service-content">
                    <i className="flaticon-cut" />
                    <h5><a href="service-details.html">{name}</a></h5>
                    <a href="service-details.html" className="read-more">read more <i className="fas fa-long-arrow-alt-right" /></a>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard