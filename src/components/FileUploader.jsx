import { useRef, useState } from 'react';
import uploadIcon from '../assets/upload.png'
import docIcon from '../assets/google-docs.png'

const FileUploader = () => {
    const [ file, setFile ] = useState('')

    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click(); 
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            setFile(files[0].name)
        }
    };

  return (
    <div className="file-uploader">
        <h2>File Uploader JavaScript</h2>
        <div className="file-input" onClick={handleClick}>
            <img src={uploadIcon} height='70px' width='70px'/>
            <p>Browse File to Upload</p>
        </div>
        <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} 
            onChange={handleFileChange}
        />
        {file && 
            <div className="file">
                <img src={docIcon} height='30px' width='30px'/>
                <p>{file}</p>
            </div>
        }
    </div>
  )
}

export default FileUploader