import React from 'react';

// const Form=()=>{
    class Calculator extends React.Component{
    state={
        firstnum:0,
        secandnum:0
    };
    firstnumber=event=>{
           this.setState({
            firstnum:parseInt(event.target.value)
           });
    }
    secandnumber=event=>{
        this.setState({
            secandnum:parseInt(event.target.value)
        });
    }
    render(){
        return(
        
            <div className="ui container center aligned">
                <h1>Arithmetic operations</h1>
                <br/><br/><br/>
                <form className="ui form">
                <div className="ui grid center aligned">
                    <div className="row">
                        <div className="column three wide">
                            <label className="ui medium header">First Number</label><input type="text" placeholder="Enter first number" onChange={this.firstnumber}/>
                        </div>
                        <div className="column three wide">
                        <label className="ui medium header">Second Number</label><input type="text" placeholder="Enter second number" onChange={this.secandnumber}/>
                        </div>                       
                    </div>
                    
                </div>  
                </form> 
                <br/><br/>
                <h1>Addition:{this.state.firstnum}+{this.state.secandnum}={this.state.firstnum+this.state.secandnum}</h1>
                <h1>Substraction:{this.state.firstnum}-{this.state.secandnum}={this.state.firstnum-this.state.secandnum}</h1>
                <h1>Multiplication:{this.state.firstnum}*{this.state.secandnum}={this.state.firstnum*this.state.secandnum}</h1>
                <h1>Division:{this.state.firstnum}/{this.state.secandnum}={this.state.firstnum/this.state.secandnum}</h1>         
            </div>
        );
    }
    
}

export default Calculator;

