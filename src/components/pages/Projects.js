import React from 'react';
import sportsConnect from '../../images/sportsConnect.png';
import homehub from '../../images/homeHub-comp.png';
import goForFitness from '../../images/goForFitness.png';

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Sports Connect',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacinia eros, id accumsan leo. Suspendisse dui leo, mattis eu pulvinar a, sollicitudin ac quam.',
            image: sportsConnect,
            deployed: 'https://sports-connect-e11a3bbe276b.herokuapp.com/',
            repository: 'https://github.com/JaminHLO/jaan-event-manager',
        },
        {
            id: 2,
            title: 'HomeHub',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacinia eros, id accumsan leo. Suspendisse dui leo, mattis eu pulvinar a, sollicitudin ac quam.',
            image: homehub,
            deployed: 'https://home-hub-management.herokuapp.com/',
            repository: 'https://github.com/Anabel-Espinoza/HomeHub',
        },
        {
            id: 3,
            title: 'Go For Fitness',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lacinia eros, id accumsan leo. Suspendisse dui leo, mattis eu pulvinar a, sollicitudin ac quam.',
            image: goForFitness,
            deployed: 'https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/',
            repository: 'https://github.com/JacobRyanWillis/Your_Digital_Personal_Trainer',
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
                        <div key={project.id} className={`my-5 border-solid border-2 border-black bg-black transition ease-in-out delay-150 bg-black opacity-90 hover:opacity-100 h-60 w-[70vw] flex ${flexDirClass}`} id={`project-${project.id}`}>
                            <div className={`w-{30%} flex ${flexStartEnd}`}>
                                <img src={project.image} className='h-60'></img>
                            </div>
                            <div className='text-white w-[70%] text-center flex flex-col justify-center'>
                                <h2 className="text-center text-white text-3xl p-3">{project.title}</h2>
                                <p className='p-3'>{project.description}</p>
                                <div className='p-3'>
                                    <button className='p-1 m-3 transition ease-in-out delay-150 bg-white text-black hover:-translate-y-1 hover:scale-110 hover:bg-emerald-800 duration-300 rounded w-[20%]'><a href={project.deployed}>Deployed</a></button>
                                    <button className='p-1 m-3 transition ease-in-out delay-150 bg-black text-white border-solid border-2 border-white hover:-translate-y-1 hover:scale-110 hover:bg-emerald-800 duration-300 rounded w-[20%]'><a href={project.repository}>Repository</a></button>
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