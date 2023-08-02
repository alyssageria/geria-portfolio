import React from 'react';
import geriaLogo from '../images/geria-logo-2.png'

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className='navbar p-5 bg-black flex justify-between'>
                <img src={geriaLogo} className='geria-logo pt-1'></img>
                <ul className='text-white flex items-center text-xl'>
                    <li className='p-3'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Welcome')}
                            className={currentPage === 'Welcome' ? 'active' : ''}
                        >Welcome</button></li>
                    <li className='p-3'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'active' : ''}>
                            Projects</button></li>
                    <li className='p-3'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'active' : ''}>
                            Contact</button></li>
                    <li className='p-3'>
                        <button
                            id='nav-button'
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'active' : ''}>
                            Resume</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;