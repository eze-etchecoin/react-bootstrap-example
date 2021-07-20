import React from 'react'

function Card({title, imageSource, url}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imageSource} alt="" />
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">asasddkljalksjdlkasjdlkjaslkdjklasjd asldkjasd als dkasj dlq wkejqlwk elqkwj elkwqj e</p>
                <a href={url} target="_blank" className="btn btn-outline-secondary rounded-0">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

export default Card
