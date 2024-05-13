import React, { useState } from 'react';

export default function TextForm({ showAlert, mode, heading }) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted to LowerCase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Lowercase was clicked: " + text);
        let newText = "";
        setText(newText);
        showAlert("TextBox has been cleared!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        // let text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        showAlert("Copied to clipboard!", "success");
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Extra spaces have been removed!", "success");
    }


    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: mode === "dark" ? "white" : "#042743" }}>
                <h1 className='mb-4'>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: mode === "dark" ? "#13466e" : "white", color: mode === "dark" ? "white" : "black" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-success mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-warning mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-info mx-2 my-2" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: mode === "dark" ? "white" : "#042743" }}>
                <h2>Your Text Summary:</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}  Minutes to read.</p>
                <h2>Preview: </h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>

        </>
    )
}