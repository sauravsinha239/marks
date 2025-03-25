import React, { useState } from 'react';
import axios from 'axios';

const MarkingPanel = ({ questionNumber }) => {
    const [marks, setMarks] = useState(0);

    const saveMarks = async () => {
        try {
            await axios.post('http://localhost:5000/api/marks', {
                questionNumber,
                marks
            });
            alert('Marks saved successfully!');
        } catch (error) {
            console.error('Error saving marks:', error);
        }
    };

    return (
        <div>
            <h3>Question {questionNumber}</h3>
            <div>
                {Array.from({ length: 11 }, (_, i) => (
                    <button key={i} onClick={() => setMarks(i)}>{i}</button>
                ))}
            </div>
            <p>Selected Marks: {marks}/10</p>
            <button onClick={saveMarks}>Save Marks</button>
        </div>
    );
};

export default MarkingPanel;
