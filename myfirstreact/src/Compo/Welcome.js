import React,{Component} from 'react'

class Welcome extends Component{
    
    render(){
        console.log(this.props)
        return (
        <h1 className='dummyClass'>
            Class {this.props.name}
            </h1>
            );
    }
}

export default Welcome