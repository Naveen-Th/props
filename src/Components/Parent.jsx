import { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
    const [uiColor,setuiColor] = useState('green');

    const colorHandler = (color) => {
        setuiColor(color)
    }

    return(
        <>
        <div
            style={{
                background:`${uiColor}`,width:'300px',height:'300px',
                borderRadius:'20px',boxShadow:
                `0px 2px 2px 10px ${uiColor} `
                }}
            ></div>
        <Child colorHandler={colorHandler}></Child>
        </>
    )
}