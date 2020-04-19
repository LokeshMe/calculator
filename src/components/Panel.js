import React from 'react';

const Signs=['+','-','*','/'];

const Button = ({sign,onClick,type,className, id})=><span id={id} className={`button ${className||''}`} onClick={()=>onClick(sign,type)}>{sign}</span>

export default ({onButtonClick})=>{
    const OpButton=({sign})=><Button sign={sign}  type='OP' onClick={onButtonClick}/>;
    const NumberButtons =({nos})=><React.Fragment>
            { nos.map(i=><Button sign={i} key={i} type='NUM' onClick={onButtonClick}/>)}          
        </React.Fragment>
    return (
        <div className='panel'>
            <NumberButtons nos={[9,8,7]}/>
            <OpButton sign='+'/>
            <br/>
            <NumberButtons nos={[6,5,4]}/>
            <OpButton sign='-'/>
            <br/>
            <NumberButtons nos={[3,2,1]}/>
            <OpButton sign='/'/>
            <br/>
            <Button sign='0' type='NUM' onClick={onButtonClick} className="double-width"/>           
            <Button sign='=' type='EQ' onClick={onButtonClick}/>
            <OpButton sign='*'/>
        </div>
    )
}