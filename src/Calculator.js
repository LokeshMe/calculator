import React from 'react';
import "./calculator.css";
import Screen from './components/Screen';
import Panel from './components/operation/Panel';

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stash:'',
            opType:[],
            currentInput:'',
        }
    }

    getResult = () =>{
        const opString = this.state.stash;
        //TODO
        let num=0;
        let operand1;
        let operand2;
        let result;
        let isOp1=true;
        let op;
        for(let i=0;i<opString.length;i++){
            //determine the type
            // if a digit, add to the prev digit
            const c = opString.charAt(i);
            const type=this.state.opType[i];
            if(type==='NUM'){
              num=num*10+parseInt(c);  
            }else if(type==='OP'){
                if(isOp1){
                    isOp1=false;
                    operand1=num;
                    op=c;
                    num=0;
                }else{
                    operand2=num;
                    result = operand1+operand2;
                    operand1=result;
                    num=0;
                }
            }
        }
        return operand1;
    }

    onButtonClick=(sign,type)=>{
        //to know its type

        switch(type){
            case 'NUM':
                this.setState({
                    opType:[...this.state.opType].concat([type]),
                    currentInput:this.state.currentInput+sign});
                break;
            case 'EQ':
                this.setState({
                    currentInput:this.getResult()
                    },()=>this.setState({stash:''}))
                break;
            case 'OP':
                this.setState({
                    stash:this.state.stash + this.state.currentInput+sign
                    , opType:[...this.state.opType].concat([type]),
                    currentInput:''
                    });
                break;
        }
    }

    render(){
        return <div>
            <Screen {...this.state}/>
            <Panel onButtonClick={this.onButtonClick}/>
        </div>
    }


}