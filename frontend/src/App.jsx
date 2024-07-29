import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        console.log(file.name);
        console.log(file);
        


        const response = await uploadFile(data);
        console.log(response.path);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Simple File Sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button className="upload-btn" onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          className="file-input"
          onChange={(e) => setFile(e.target.files[0])}
        />
  
        <a href={result} target="_blank" rel="noopener noreferrer" className="download-link">
          {result}
        </a> 
      </div>
    </div>
  );
  
}

export default App;