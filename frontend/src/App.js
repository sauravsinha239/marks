import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import PDFUpload from './components/PDFUpload';
import PDFViewer from './components/PDFViewer';


function App() {

  return (

    <div>
      <PDFUpload />
      <PDFViewer />
      <Dashboard />
    </div>


  );
}

export default App;
