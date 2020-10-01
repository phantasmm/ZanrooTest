import React,{Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state={
            counter:0
        }

    }
    increment() {
        
        // this.setState({
        //     counter:this.state.counter+1
        // }, ()=>{console.log('Callback value:',this.state.counter)})
        
        this.setState((prevState,props)=>({
            counter:prevState.counter+1
        }),()=>{console.log('Callback value:',this.state.counter)} )
        console.log(this.state.counter)
    }
    incrementFive() { 
        
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
    render(){
        return (
            <div>
                <h1>
                    Count:{this.state.counter}
                </h1>
                
                <button onClick={()=>this.increment()}>Add</button>
                <button onClick={()=>this.incrementFive()}>Add 5</button>
            </div>
        );
    }
}
export default Counter