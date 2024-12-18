import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handleUpperCaseClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Pppercase!", "success");
    }
    
    const handleLowerCaseClick = () => {
        // console.log("On Change");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    
    const handleClearTextClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copies to Clipboard!", "success");
    }
    
    //Hook in react
    const [text , setText] = useState (""); 
    //According to google, A person can read a single word in 0.008 minutes
    return (
    <>
         <div>  
            <div className = "container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className = "mb-4"> {props.heading}</h1>  
                </div>
                <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'black' , color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0}className="btn btn-info mx-1 my-1" onClick= {handleUpperCaseClick}>Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick= {handleLowerCaseClick}>Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1"onClick={handleClearTextClick}>Clear Text</button>
                </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Your text summary</h2>
            <p>{text.trim().split(/\s+/).filter((word) => {return word.length!==0}).length} Words and {text.replace(/\s/g, "").length} Characters</p>
            <p>It takes {0.008 * text.trim().split(" ").filter((word) => {return word.length!==0}).length} Minutes to read this text.</p>
            <h2> Preview </h2> 
            <p>{text.length > 0?text : 'Nothing to Preview'}</p>
        </div>
    </>
  )
}
