import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: "Pagina de Ezequiel",
        image: image1,
        url: "https://www.linkedin.com/in/ezequiel-etchecoin-790b7311b/"
    },
    {
        id: 2,
        title: "Otra página",
        image: image2,
        url: "https://www.linkedin.com/in/ezequiel-etchecoin-790b7311b/"
    },
    {
        id: 3,
        title: "Última página",
        image: image3,
        url: "https://www.linkedin.com/in/ezequiel-etchecoin-790b7311b/"
    }
]

function Cards() {
    return (
        <div class="container d-flex justify-content-center h-100 align-items-center">
            <div class="row">
                {
                    cards.map(card => (
                        <div class="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
