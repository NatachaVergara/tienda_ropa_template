import React from 'react'

import { Carousel } from 'react-responsive-carousel'

const ItemImages = ({ item }) => {
    console.log(item)
    return (
        <div className='col-lg-5 mt-5'>
            <Carousel showArrows={true} autoPlay emulateTouch showIndicators={false} >
                <div>
                    <img src={item.img} />
                </div>
                <div>
                    <img src='https://picsum.photos/200' />
                </div>

            </Carousel>


        </div>
    )
}

export default ItemImages