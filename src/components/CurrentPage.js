import React, { useState } from 'react';
import Navbar from './Navbar';
import Welcome from './pages/Welcome';

function CurrentPage() {
    const [currentPage, setCurrentPage] = useState('Welcome');

    const renderPage = () => {
        if (currentPage === 'Welcome') {
            return <Welcome />;
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