import { useState } from "react";

export const Child = ({colorHandler}) =>{
    const [inputColor,setInputColor] = useState('');

    const handleInput = (e) => {
        setInputColor(e.target.value);
    }

    const handleColorChange = () => {
        colorHandler(inputColor);
        setInputColor('');
    }
    return(
        <>
            <input type="text" value={inputColor} 
            onChange={handleInput} placeholder="Enter color name" 
            style={{marginTop:'50px',fontSize:'15px',padding:'5px'}}
            />
            <button onClick={handleColorChange}
            style={{width:'100px',height:'25px',padding:'2px'}}
            >Submit</button>
        </>
    )
}