import React from 'react'

function BodyTreatmentCard({ name, icon_image }) {
    return (
        <>
            <a className="popular-service-item" href="service-details.html">
                <img src={icon_image} alt="" />
                <h5>{name}</h5>
            </a>
        </>
    )
}

export default BodyTreatmentCard