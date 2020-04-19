import React from 'react';
import "./calculator.css";
import Screen from './components/Screen';
import Panel from './components/Panel';

const Operations={
    '+':(a,b)=>a+b,
    '-':(a,b)=>a-b,
    '/':(a,b)=>a/b,
    '*':(a,b)=>a*b
};

const OperatorSigns = Object.keys(Operations);

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stash:'',
            currentInput:'',
        }
    }

    getResult = () =>{
        const {stash, currentInput} = this.state
        const opString = stash+currentInput ;
        //TODO
        let num=0;
        let operand1;
        let isOp1=true;
        let operator;
        for(let i=0;i<opString.length;i++){
            const c = opString.charAt(i);
            if(OperatorSigns.includes(c)){
                operand1 = operator ? Operations[operator](operand1,num) : num;
                operator=c;
                num=0;
            }else{// Number
              num=num*10+parseInt(c);  
            }
        }
        return Operations[operator](operand1,num);
    }

    onButtonClick=(sign,type)=>{
        //to know its type

        switch(type){
            case 'NUM':
                this.setState({
                    currentInput:this.state.currentInput+sign
                });
                break;
            case 'EQ':
                this.setState({
                    currentInput:this.getResult()
                    },()=>this.setState({stash:''}))
                break;
            case 'OP':
                this.setState({
                    stash:this.state.stash + this.state.currentInput+sign,
                    currentInput:''
                    });
                break;
        }
    }

    render(){
        return <div className="calculator">
            <Screen {...this.state}/>
            <Panel onButtonClick={this.onButtonClick}/>
        </div>
    }


}