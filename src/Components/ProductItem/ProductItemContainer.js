import React from 'react'
import { useStoreContext } from '../../Context/Store'
import ItemBody from './ItemBody'
import ItemImages from './ItemImages'

const ProductItemContainer = () => {
  const { item,  addItem } = useStoreContext()
  return (
    <main>
        <section className='itemContainer bg-light'>
            <div className='container pb-5'>
                <div className='row'>
                    <ItemImages item={item}  />
                    <ItemBody item={item} addItem={addItem} />                  
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProductItemContainer