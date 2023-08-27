import React from 'react';
import sportsConnect from '../../images/sports-connect.png';
import homehub from '../../images/homehub.png';
import goForFitness from '../../images/go-for-fitness-screenshot.png';

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Sports Connect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacinia eros, id accumsan leo. Suspendisse dui leo, mattis eu pulvinar a, sollicitudin ac quam.',
            image: sportsConnect,
        },
        {
            id: 2,
            title: 'HomeHub',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacinia eros, id accumsan leo. Suspendisse dui leo, mattis eu pulvinar a, sollicitudin ac quam.',
            image: homehub,
        },
        {
            id: 3,
            title: 'Go For Fitness',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacinia eros, id accumsan leo. Suspendisse dui leo, mattis eu pulvinar a, sollicitudin ac quam.',
            image: goForFitness,
        }
    ]

    return (
        <div className='projects bg-black h-screen'>
            <h1 className='p-5 text-white text-5xl text-center'>Projects</h1>
            <div className='flex flex-col items-center'>
                {projects.map(project => {
                    const isEven = project.id % 2 === 0;
                    const flexDirClass = isEven ? 'flex-row' : 'flex-row-reverse';
                    const flexStartEnd = isEven ? 'justify-start' : 'justify-end';

                    return (
                        <div key={project.id} className={`my-5 border-solid border-2 border-black h-52 w-[70vw] flex ${flexDirClass}`} id={`project-${project.id}`}>
                            <div className={`w-{30%} flex ${flexStartEnd}`}>
                                <img src={project.image} className='h-52'></img>
                            </div>
                            <div className='text-white w-[70%] text-center flex flex-col justify-center'>
                                <h2 className="text-center text-white text-3xl py-2">{project.title}</h2>
                                <p>{project.description}</p>
                                <div>
                                    <button className='p-1 bg-black border-solid border-2 border-white rounded w-1/4'>Deployed</button>
                                    <button className='p-1 bg-white text-black rounded w-1/4'>Repository</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;