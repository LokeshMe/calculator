import React from 'react';
// import Operation from "./Button";

// Equals to
// Operations
// Numbers

//every button to have a sign and type

const Signs=['+','-','*','/'];
const Numbers = ['9','8','7'];

const Button = ({sign,onClick,type})=><span className="button" onClick={()=>onClick(sign,type)}>{sign}</span>

export default ({onButtonClick})=>{
    return (
        <div>
            {Signs.map(i=><Button sign={i} type='OP' onClick={onButtonClick}/>)}
            <br/>
            {Numbers.map(i=><Button sign={i} type='NUM' onClick={onButtonClick}/>)}
            <br/>
            <Button sign='=' type='EQ' onClick={onButtonClick}/>
        </div>
    )
}