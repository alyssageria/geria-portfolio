import React, { useState } from 'react';
import Navbar from './Navbar';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';

function CurrentPage() {
    const [currentPage, setCurrentPage] = useState('Welcome');

    const renderPage = () => {
        if (currentPage === 'Welcome') {
            return <Welcome />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div >
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default CurrentPage;