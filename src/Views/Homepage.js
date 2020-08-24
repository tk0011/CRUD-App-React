import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

const Homepage = () => {
  
    return (
        <div className = 'homepage'>
             <Carousel>
                <div>
                    <img src="https://lorempixel.com/1080/480/nature/1" alt = 'caraousel' />
                    <p className="legend">Nature</p>
                </div>
                <div>
                    <img src="https://lorempixel.com/1080/480/nature/2" alt = 'caraousel' />
                    <p className="legend">Nature</p>
                </div>
                <div>
                    <img src="https://lorempixel.com/1080/480/nature/3" alt = 'caraousel' />
                    <p className="legend">Nature</p>
                </div> 
                <div>
                    <img src="https://lorempixel.com/1080/480/nature/4" alt = 'caraousel' />
                    <p className="legend">Nature</p>
                </div> 
                <div>
                    <img src="https://lorempixel.com/1080/480/nature/5" alt = 'caraousel' />
                    <p className="legend">Nature</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Homepage
