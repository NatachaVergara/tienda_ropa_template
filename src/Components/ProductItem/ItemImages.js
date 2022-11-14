import React from 'react'

import { Carousel } from 'react-responsive-carousel'

const ItemImages = ({ item }) => {
   // console.log(item)
    return (
        <div className='col-lg-5 mt-5'>
            <Carousel showArrows={true} autoPlay emulateTouch showIndicators={false} >
                <div>
                    <img src={item.img} alt={item.img_alt} />
                </div>
                <div>
                    <img src='https://picsum.photos/200' alt='img carousel' />
                </div>

            </Carousel>


        </div>
    )
}

export default ItemImages