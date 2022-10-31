import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ img, img_alt, h5_text, link_to }) => {
    return (
        <div className="col-12 col-md-4 p-5 mt-3">
            <img src={img} alt={img_alt}  className="rounded-circle img-fluid border" />
            <h5 className="text-center mt-3 mb-3">{h5_text}</h5>
            <p className="text-center"><Link to={link_to} className="btn btn-success">Comprar</Link></p>
        </div>
    )
}

export default CategoryCard