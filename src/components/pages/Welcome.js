import React from 'react';
import videoHero from '../../images/portfolio-hero.mp4';
import imageMe from '../../images/me-transparent.png';

function Welcome() {
    return (
        <div className='max-w-screen overflow-x-hidden'>
            <div className='video-hero'>
                <video autoPlay muted loop playsInline className='video h-full min-w-screen object-cover'>
                    <source src={videoHero} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex justify-center items-center">

                    <h1 className="text-white text-7xl text-center">Alyssa Geria <br></br> <span className='text-5xl'>Full Stack Web Developer</span></h1>
                </div>
            </div>
            <div className='bg-black h-[80vh] text-white'>
                <h2 className='text-8xl p-6 text-center'>About</h2>
                <div className='flex items-center'>
                    <div className='grid-cols-1 w-2/5 text-center'>
                        <h1 className='text-4xl'>Alyssa Geria</h1>
                        <p className=''>I am from Mission Viejo California, and I am a Full Stack Software Engineer. I have grown a strong passion for creating beautiful, user-centric web applications.</p>
                    </div>
                    <div className='grid-cols-2 w-1/5 flex justify-center'>
                        <img src={imageMe} className='h-[25rem]'></img>
                    </div>
                    <div className='grid-cols-3 w-2/5 text-center'>
                        <h1 className='text-4xl'>What I do</h1>
                    </div>
                    {/* <div className='grid-cols-2 w-1/2 flex justify-center'>
                        <p className='text-3xl'>Hi! My name is Alyssa, and I am a Full Stack Web Developer from Mission Viejo, California. I have grown a strong passion for web development and I love to create beautful user-centric webpages.</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Welcome;