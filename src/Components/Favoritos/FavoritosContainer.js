import React from 'react'
import { useStoreContext } from '../../Context/Store'
import CardFavorito from './CardFavorito'

const FavoritosContainer = () => {
    const { favoritos } = useStoreContext();

    const sinFavoritos = <h1>En este momento no hay favoritos seleccionados</h1>;
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