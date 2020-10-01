import React, { Component } from 'react'

export class SanrooEditableTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:this.props.object.name,
            age:this.props.object.age,
            nickName:this.props.object.nickName
        }
    }
    nameChangeHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
        
  }
  selectChange=(event)=>{
    this.setState({
        age:event.target.value
    })
}
    nickNameChangeHandler=(event)=>{
        this.setState({
            nickName:event.target.value
        })
    }
    render() {
        return (
            <tr >
                <td>
                    <input type='text' value={this.state.name} onChange={this.nameChangeHandler}></input>
                    </td>
                    <td>
                    <select value={this.state.age} onChange={this.selectChange}>
                    {
                         [...Array(60).keys()].map((num,index)=>
                             <option key={index}>{num}</option>
                         )
                    }
                </select>
                    </td>
                    <td>
                    <input type='text' value={this.state.nickName} onChange={this.nickNameChangeHandler}></input>
                        </td>
                    <td>
                        <button onClick={()=>this.props.SaveHandler(this.props.object.id,this.state.name,this.state.age,this.state.nickName)}>Save</button>
                        <button onClick={()=>this.props.CancelHandler(this.props.object.id)}>Cancel</button>
                        {/* <button onClick={()=>console.log(this.state)}>Log</button> */}
                    </td>
                    </tr>
        )
    }
}

export default SanrooEditableTable
