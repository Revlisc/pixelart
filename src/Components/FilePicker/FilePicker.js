import React, { useState, useRef } from 'react'
import './FilePicker.css'

//const MAX_DEFAULT_SIZE_BYTES = 500000
//const KILO_PER_BYTE = 1000

//const convertByteToKilo = (bytes) => Math.round(bytes/KILO_PER_BYTE), maxSizeBytes = MAX_DEFAULT_SIZE_BYTES

const FilePicker = ({label, updateFilesCb, ...otherProps}) => {
    
    const fileInputField = useRef(null)
    const [files, setFiles] = useState({})
    
    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
          let updatedFiles = addNewFiles(newFiles);
          setFiles(updatedFiles);
          callUpdateFilesCb(updatedFiles);
        }
    };
    //delete code for multiple
    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
          if (file.size) {
            //if (!otherProps.multiple) {
            //  return { file };
            //}
            files[file.name] = file;
          }
        }
        return { ...files };
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    };

    //these two probably not needed
    const convertNestedObjectToArray = (nestedObj) =>
        Object.keys(nestedObj).map((key) => nestedObj[key]);

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        updateFilesCb(filesAsArray);
    };
    return (
        <>
        {Object.keys(files).length === 0 ? (
        <section className='fileUploadContainer'>
            <p>Drag and drop your files anywhere or</p>
            <button type="button" onClick={handleUploadBtnClick}>
                <i className="fas fa-file-upload" />
                <span> Upload an Image</span>
            </button>
            <input
            type="file"
            ref={fileInputField}
            onChange={handleNewFileUpload}
            title=""
            value=""
            {...otherProps}
            className='fileInput'
            />
        </section> 
        ): (
        <article >
            
            <section >
            {Object.keys(files).map((fileName, index) => {
                let file = files[fileName];
                let isImageFile = file.type.split("/")[0] === "image";
                return (
                <section key={fileName}>
                    <div>
                    {isImageFile && (
                        <img
                        src={URL.createObjectURL(file)}
                        alt={`file preview ${index}`}
                        className='templateImage'
                        />
                    )}
                    <div isImageFile={isImageFile}>
                        <span className='fileName'>{file.name}</span>
                        <aside>
                        {/*<span>{convertByteToKilo(file.size)} kb</span>*/}
                        <i className="fas fa-trash-alt fileName" onClick={() => removeFile(fileName)}/>
                        </aside>
                    </div>
                    </div>
                </section>
                );
            })}
            </section>
        </article>
        )}
        </>
    )
}

export default FilePicker
