import React from 'react'
import { useStoreContext } from '../../Context/Store'
import CardFavorito from './CardFavorito'
import EmptyFavoritos from './EmptyFavoritos'
const FavoritosContainer = () => {
    const { favoritos } = useStoreContext();

    const sinFavoritos = <EmptyFavoritos /> ;
    const listFavoritos = <CardFavorito favoritos={favoritos}/>;

    return (
        <main id='favoritos'>
            <section className='container d-flex flex-column justify-content-start align-self-start my-5'>
                {favoritos.length === 0 ? sinFavoritos : listFavoritos }
            </section>
        </main>
    )
}

export default FavoritosContainer