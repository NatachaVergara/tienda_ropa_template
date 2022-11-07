import React, { useState } from "react";
import { useStoreContext } from "../../Context/Store";
import HoritonzalNav from "./HoritonzalNav";
import ShopCard from "./ShopCard";
import ShopPagination from "./ShopPagination";
import VerticalNav from "./VerticalNav";


const ShopContainer = () => {
    const { products } = useStoreContext()

    const [sortList, setSortList] = useState(products)
    const [priceValue, setPriceValiu] = useState('TODO')
    //console.log(priceValue)

    const shortListByPrice = (value) => {
        switch (value) {
            case '':
                setPriceValiu(value)
                setSortList(products);
                // setProducts(products);
                break;
            case 'MENOR':
                setPriceValiu(value)
                let lower = products.sort((a, b) => a.price - b.price);
                setSortList(lower);
                // console.log(sortList)
                break;
            case 'MAYOR':
                setPriceValiu(value)
                let higher = products.sort((a, b) => b.price - a.price);
                setSortList(higher);
                // console.log(products);
                break;
            case 'TODO':
                console.log(value)
                setPriceValiu(value)
                setSortList(products);
                // setProducts(products);
                // console.log(products);
                break;
            default:
                setPriceValiu(value)
                setSortList(products);
                // setProducts(products);
                // console.log(products);
                break;
        }
    }


    const sortByGender = (value) => {
        switch (value) {
            case "Mujeres":
                setSortList(products)
                let woman = products.filter((m) => m.product_gender === "Mujeres");
                setSortList(woman);
                break;
            case "Hombres":
                setSortList(products)
                let man = products.filter((m) => m.product_gender === "Hombres");
                setSortList(man);
                break;
            case "Unisex":
                let unisex = products.filter((m) => m.product_gender === "Unisex");
                setSortList(unisex);
                break;
            default:
                setSortList(products);
                break;

        }

    }

    return (
        <main className="container py-5">
            <div className="row" >
                <section className="col-lg-3 navVertical">
                    <VerticalNav sortByGender={sortByGender} />
                </section>
                <section className="col-lg-9">
                    <div className="row">
                        <HoritonzalNav shortListByPrice={shortListByPrice} />
                        <div className="col-12 row card-section">
                            {products.length === 0 ? <h1 className="m-5">No hay productos disponibles</h1> :
                                sortList.map((card) => (
                                    <ShopCard
                                        key={card.id}
                                        img={card.img}
                                        img_alt={card.img_alt}
                                        price={card.price}
                                        product_title={card.product_title}
                                        size={card.size}
                                        brand={card.brand}
                                        obj={card}
                                    />
                                ))

                            }
                        </div>
                        <ShopPagination array={products} />
                    </div>
                </section>

            </div>

        </main>
    );
};

export default ShopContainer;
