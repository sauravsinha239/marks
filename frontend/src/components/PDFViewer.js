import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// PDF Worker Setup
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl, onPageChange }) => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handlePageChange = (offset) => {
        const newPage = pageNumber + offset;
        if (newPage >= 1 && newPage <= numPages) {
            setPageNumber(newPage);
            onPageChange(newPage);
        }
    };

    return (
        <div>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <button onClick={() => handlePageChange(-1)}>Previous</button>
                <span> Page {pageNumber} of {numPages} </span>
                <button onClick={() => handlePageChange(1)}>Next</button>
            </div>
        </div>
    );
};

export default PDFViewer;
