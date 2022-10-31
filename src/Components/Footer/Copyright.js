import React from 'react'

const Copyright = () => {
  return (
    <div className="w-100 bg-black py-3">
    <div className="container">
      <div className="row pt-2">
        <div className="col-12">
          <p className="text-left text-light">
            Copyright &copy;{new Date().getFullYear()} Company Name 
            {/* | Designed by{" "}
            <a
              rel="sponsored"
              href="https://templatemo.com"
              target="_blank"
            >
              TemplateMo
            </a> */}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Copyright