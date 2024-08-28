import React from "react";
import { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  }

  const handleLowClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");

  }

  const handleClearClick = ()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared", "success");

  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleCopy = () => {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard", "success");

  }

  const handleExtraSpace = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");

  }

  const [text, setText] = useState("Enter your text here"); //this is the syntax of state in react
  return (
    <>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleExtraSpace}>Extra Space</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p>You need <b>{0.008*text.split(" ").length}</b> minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>1? text:"Enter Something To Preview"}</p>
      </div>
    </>
  );
}
