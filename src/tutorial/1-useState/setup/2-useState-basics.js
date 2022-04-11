import React, {useState} from 'react';

const UseStateBasics = () => {
    const [text, setText] = useState("random title");
    console.log(text, setText)
    const handleClick = () => {
        if (text === 'random title') {
            setText("hello World")
        }
        else{
            setText("random title")
        }
    }

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button className="btn" onClick={handleClick}>change</button>
        </React.Fragment>
    )
};

export default UseStateBasics;
