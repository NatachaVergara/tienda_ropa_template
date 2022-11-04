import React from 'react'

const HoritonzalNav = ({ shortListByPrice }) => {
    return (
        <div className="col-7 col-md-2 pb-4 d-flex">
            
                <select
                    className="form-control"
                    onChange={(e) => shortListByPrice(e.target.value)}
                >
                    <option value={"todo"}>Todo</option>
                    <option value={"menor"}>Menor Precio</option>
                    <option value={"mayor"}>Mayor Precio</option>
                </select>
           
        </div>
    )
}

export default HoritonzalNav