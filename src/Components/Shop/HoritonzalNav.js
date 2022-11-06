import React from 'react'

const HoritonzalNav = ({ shortListByPrice }) => {
    return (
        <div className="col-7 col-md-2 pb-4 d-flex">
            
                <select
                    className="form-control"
                    onChange={(e) => shortListByPrice(e.target.value)}
                >
                    
                    <option value={""}></option>
                    <option value={"TODO"}>Todo</option>
                    <option value={"MENOR"}>Menor Precio</option>
                    <option value={"MAYOR"}>Mayor Precio</option>
                </select>
           
        </div>
    )
}

export default HoritonzalNav