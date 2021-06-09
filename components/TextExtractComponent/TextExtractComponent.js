import React, { Component } from 'react';
import styleClass from './TextExtractComponent.module.css';
import Tesseract from 'tesseract.js';
import Button from 'react-bootstrap/Button';

class TextExtractComponent extends Component {

  state = {  
    selectedFile: null
  };
  
  // On file select (from the pop up)
  onFileChange = event => {  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });  
  };
  
  // On file upload (click the upload button)
  onFileUpload = () => {  
    // Create an object of formData
    const formData = new FormData();  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );  
    // Details of the uploaded file
    console.log(this.state.selectedFile);  
    // Request made to the backend api
    // Send formData object
    //axios.post("api/uploadfile", formData);
    
      fetch("http://localhost:3000/api/text-extract-service",{
          method:'POST',
          body:formData,
          
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result");
          console.log(result);
          this.setState({
              data:result.dataValue       
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
  };
  
  // File content to be displayed after
  // file upload is complete
  fileData = () => {  
    if (this.state.selectedFile) {       
      return (
        <div>
          <h2>File Details:</h2>           
<p>File Name: {this.state.selectedFile.name}</p>
           
<p>File Type: {this.state.selectedFile.type}</p>           
<p>            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  
  render() {
  
    return (
      <div>
         
          <h3>
            File Upload using React!
          </h3>
          <div>
              <input type="file" onChange={this.onFileChange} />
              <button onClick={this.onFileUpload}>
                Upload!
              </button>
          </div>
        {this.fileData()}
      </div>
    );
  }
}


export default TextExtractComponent;