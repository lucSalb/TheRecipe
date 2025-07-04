import { useState } from "react";
import PropTypes from 'prop-types';

function CardElement(props) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure className="effect-ming tm-video-item">
                <img src={props.img} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                    <h2>{props.title}</h2>
                    <a href="photo-detail.html">View more</a>
                </figcaption>
            </figure>
            <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">{props.area}</span>
                <span>{props.category}</span>
            </div>
        </div>
    );
}
CardElement.prototype = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    area:PropTypes.string.isRequired
}
export default CardElement;