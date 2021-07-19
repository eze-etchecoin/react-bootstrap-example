import React from 'react'

import image1 from '../assets/image1.jpg'

function Card() {
    return (
        <div className="card text-center bg-dark">
            <img src={image1} alt="" />
            <div className="card-body text-light">
                <h4 className="card-title">Título</h4>
                <p className="card-text text-secondary">asasddkljalksjdlkasjdlkjaslkdjklasjd asldkjasd als dkasj dlq wkejqlwk elqkwj elkwqj e</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

export default Card
