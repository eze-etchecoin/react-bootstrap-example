import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div class="container d-flex justify-content-center h-100 align-items-center">
            <div class="row">
                <div class="col-md-4">
                    <Card />
                </div>

                <div class="col-md-4">
                    <Card />
                </div>

                <div class="col-md-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Cards
