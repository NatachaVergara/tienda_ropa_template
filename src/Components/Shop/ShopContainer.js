import React from "react";
import { useStoreContext } from "../../Context/Store";
import HoritonzalNav from "./HoritonzalNav";
import ShopCard from "./ShopCard";
import ShopPagination from "./ShopPagination";
import VerticalNav from "./VerticalNav";


const ShopContainer = () => {

    const { data_card_img, products, setProducts } = useStoreContext()
    console.log(products)
    

    const shortListByPrice = (value) => {
        if (value === "menor") {
            let lower =[ ...data_card_img].sort((a, b) => a.price - b.price);
            setProducts(lower);
            // console.log(products);
        } else if (value === "mayor") {
            let higher = [...products].sort((a, b) => b.price - a.price);
            setProducts(higher);
            //  console.log(products);
        } else {
            setProducts(data_card_img);
        }
    };

    const sortByGender = (value) => {
        if (value === "Mujeres") {
            let woman = products.filter((m) => m.product_gender === "Mujeres");
            setProducts(woman);
        } else if (value === "Hombres") {
            let man = products.filter((m) => m.product_gender === "Hombres");
            setProducts(man);
        } else {
            let unisex = products.filter((m) => m.product_gender === "Unisex");
            setProducts(unisex);
        }
    };

    return (
        <main className="container py-5">
            <div className="row" >
                <section className="col-lg-3 navVertical">
                    <VerticalNav sortByGender={sortByGender} />
                </section>
                <section className="col-lg-9">
                    <div className="row">
                        <HoritonzalNav shortListByPrice={shortListByPrice}  />
                        <div className="col-12 row card-section">
                            {products.length === 0 ? <h1 className="m-5">No hay productos disponibles</h1> :
                                products.map((card) => (
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
