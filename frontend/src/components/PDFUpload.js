import React, { useState } from 'react';
import axios from 'axios';

const PDFUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a PDF to upload');
            return;
        }
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Upload PDF</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload PDF</button>
        </div>
    );
};

export default PDFUpload;
