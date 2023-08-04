import React from 'react';
import videoHero from '../../images/portfolio-hero.mp4'

function Welcome() {
    return (
        <div>
            <div className='h-[90vh]'>
                <video autoPlay muted loop playsInline>
                    <source src={videoHero} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-7xl text-center">Alyssa Geria <br></br> <span className='text-5xl'>Web Developer</span></h1>
                </div>
            </div>
            <div className='bg-black h-[80vh]'>

            </div>
        </div>
    )
}

export default Welcome;