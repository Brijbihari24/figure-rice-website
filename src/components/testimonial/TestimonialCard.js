import React from 'react'

function TestimonialCard({ testimonial, name }) {
    return (
        <div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
                <div className="quote-rating">
                    <i className="fas fa-quote-left" />
                </div>
                <p>
                    {testimonial}
                </p>
                <div className="author-description">
                    <div className="description">
                        <h5>
                            {name}
                        </h5>
                    </div>
                </div>
                <div className="for-border" />
            </div>
        </div>
    )
}

export default TestimonialCard