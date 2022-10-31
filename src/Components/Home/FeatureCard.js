import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({ link_to, img, img_alt, li_price, p_title, p_text, p_review }) => {
    return (
        <div className="col-12 col-md-4 mb-4">
            <Link className="card h-100 text-decoration-none" to={link_to}>
                
                    <img src={img} className="card-img-top" alt={img_alt} />
                
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                        <li className="text-muted text-right">{li_price} </li>
                    </ul>
                    <p className="h2 text-decoration-none text-dark">{p_title} </p>
                    <p className="card-text text-dark">
                       {p_text}
                    </p>
                    <p className="text-muted">{p_review} </p>
                </div>
            </Link>
        </div>
    )
}

export default FeatureCard