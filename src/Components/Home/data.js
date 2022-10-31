import category_img1 from '../../assets/img/category_img_01.jpg'
import category_img2 from '../../assets/img/category_img_02.jpg'
import category_img3 from '../../assets/img/category_img_03.jpg'
import feature_prod_01 from '../../assets/img/feature_prod_01.jpg'
import feature_prod_02 from '../../assets/img/feature_prod_02.jpg'
import feature_prod_03 from '../../assets/img/feature_prod_03.jpg'


export const data_cards = [
    {
        id: 1,
        img: category_img1,
        img_alt: "category_img1",
        h5_text: "Relojes",
        link_to: "#",
    },
    {
        id: 2,
        img: category_img2,
        img_alt: "category_img2",
        h5_text: "Zapatillas",
        link_to: "#",
    },
    {
        id: 3,
        img: category_img3,
        img_alt: "category_img3",
        h5_text: "Accesorios",
        link_to: "#",
    },
];


export const data_features = [
    {
        id: 1,
        link_to: '#',
        img: feature_prod_01,
        img_alt: "feature_prod_01",
        li_price: "$1000",
        p_title: "Pesas",
        p_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
        p_review: "Reviews (24)",
    },
    {
        id: 2,
        link_to: "#",
        img: feature_prod_02,
        img_alt: "feature_prod_02",
        li_price: "$10.000",
        p_title: "Zapatillas Cloud Nike",
        p_text: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
        p_review: "Reviews (48)",
    },
    {
        id: 3,
        link_to: "#",
        img: feature_prod_03,
        img_alt: "feature_prod_03",
        li_price: "$30.000",
        p_title: "Polaroid One Step2",
        p_text: " Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
        p_review: "Reviews (20)",
    },


]
