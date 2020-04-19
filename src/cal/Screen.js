import React from 'react';


//TODO: Alignment, colour, 
export default class Screen extends React.Component{
    
    render(){
        const {stash,currentInput}=this.props;

        return (<div className="screen">
            <div className="stash">{stash||<br/>}</div>
            <div>{currentInput}</div>
        </div>);
    }


}