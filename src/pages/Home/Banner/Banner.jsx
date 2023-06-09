import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
             <Carousel showArrows={true} autoPlay={true}>
                <div>
                    <img  src="https://i.ibb.co/QF7MSrd/Banner-1.jpg" />
                    <div className="legend ">
                    
                    <p className='lg:text-3xl text-start lg:mx-24 lg:mb-14 mx-1'>Motion Masters Dance Academy is a premier summer camp dance learning school dedicated to providing a comprehensive and immersive dance experience for aspiring dancers of all ages and skill levels.</p>
                    
                    
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/f1BYyy7/Banner-2.jpg" />
                    <div className="legend">
                    <p className='lg:text-3xl text-start lg:mx-24 lg:mb-14 mx-1'>Motion Masters Dance Academy is a premier summer camp dance learning school dedicated to providing a comprehensive and immersive dance experience for aspiring dancers of all ages and skill levels.</p>
                    </div>
                </div>
                <div>
                    <img  src="https://i.ibb.co/pQg2cgv/Banner-3.jpg" />
                    <div className="legend">
                    <p className='lg:text-3xl text-start lg:mx-24 lg:mb-14 mx-1'>Motion Masters Dance Academy is a premier summer camp dance learning school dedicated to providing a comprehensive and immersive dance experience for aspiring dancers of all ages and skill levels.</p>
                    </div>
                </div>
                <div>
                    <img  src="https://i.ibb.co/ch7ZbzZ/Banner-4.jpg" />
                    <div className="legend">
                    <p className='lg:text-3xl text-start lg:mx-24 lg:mb-14 mx-1'>Motion Masters Dance Academy is a premier summer camp dance learning school dedicated to providing a comprehensive and immersive dance experience for aspiring dancers of all ages and skill levels.</p>
                    </div>
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;