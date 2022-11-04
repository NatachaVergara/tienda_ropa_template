import React from 'react'
import ItemBody from './ItemBody'
import ItemImages from './ItemImages'

const ProductItemContainer = () => {
  return (
    <main>
        <section className='itemContainer bg-light'>
            <div className='container pb-5'>
                <div className='row'>
                    <ItemImages />
                    <ItemBody/>
                </div>
            </div>
        </section>



    </main>
  )
}

export default ProductItemContainer