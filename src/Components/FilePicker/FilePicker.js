import React, { useState, useRef } from "react";
import "./FilePicker.css";

//const MAX_DEFAULT_SIZE_BYTES = 500000
//const KILO_PER_BYTE = 1000

//const convertByteToKilo = (bytes) => Math.round(bytes/KILO_PER_BYTE), maxSizeBytes = MAX_DEFAULT_SIZE_BYTES

// window.addEventListener("dragover",function(e){

//   e.preventDefault();
// },false);
// window.addEventListener("drop",function(e){

//   e.preventDefault();
// },false);

const FilePicker = ({ updateFilesCb, ...otherProps }) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  //const imageColorList = useContext()

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    fileInputField.current.click();
  };

  const handleDrop = (e) => {
    e.nativeEvent.preventDefault();
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
      {/* when files is empty */}
      {Object.keys(files).length === 0 ? (
        <section className='fileUploadContainer'>
          <p style={{ textAlign: "center" }}>
            To get inspired, start by uploading an image, or pick a sample image below
          </p>
          <button
            type='button'
            onClick={(e) => handleUploadBtnClick(e)}
            onDragOver={(e) => e.preventDefault}
            onDrop={(e) => handleDrop(e)}>
            <i className='fas fa-file-upload uploadBtn' />
            <span>Here</span>
          </button>
          <input
            type='file'
            ref={fileInputField}
            onChange={handleNewFileUpload}
            title=''
            value=''
            {...otherProps}
            className='fileInput'
          />
        </section>
      ) : (
        <article>
          <section>
            {Object.keys(files).map((fileName, index) => {
              let file = files[fileName];
              console.log("file is", file);
              //let isImageFile = file.type.split("/")[0] === "image";
              return (
                <section key={fileName}>
                  <div>
                    {file && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`file preview ${index}`}
                        className='templateImage'
                      />
                    )}
                    <div>
                      <i
                        className='fas fa-trash-alt fileName'
                        onClick={() => removeFile(fileName)}
                      />
                    </div>
                  </div>
                </section>
              );
            })}
          </section>
        </article>
      )}
    </>
  );
};

export default FilePicker;
