import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import MarkingPanel from './MarkingPanel';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <h1>Answer Sheet Validation System</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 6 }}>
                    <PDFViewer pdfUrl="/sample.pdf" onPageChange={setCurrentPage} />
                </div>
                <div style={{ flex: 4 }}>
                    <MarkingPanel questionNumber={currentPage} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
