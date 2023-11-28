

import React,{useState} from "react";
function App(){
    const [headingText,setHeadingText] = useState('');
    const [isMouseOver,setMouseOver] = useState(false);
    function handleClick(){
        setHeadingText("Hello");
    }
    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }
    return(
        <div>
            <h1 style={{backgroundColor: isMouseOver ? "red":"blue"}} >Hello {headingText}</h1>
            <input type="text" value={headingText} onChange={(e) => setHeadingText(e.target.value)} /> 
            <button  
            onClick={handleClick} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>Submit</button>
        </div>
    );
}
export default App;