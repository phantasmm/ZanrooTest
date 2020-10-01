import React, { Component } from 'react'
import ContentTable from './SanrooTable'

class SanrooTest extends Component {
    constructor(props) {
        super(props)
        const todoCounter = 2
        
        
        this.state = {
            name:'test',
            age:'10',
            nickName:'T',
            todoCounter: todoCounter,
             Personlist:[
                 {
                     id:1,
                     name:'Mr.A',
                     age:'37',
                    nickName:'A',
                    editing:false
                 },
                 {
                     id:2,
                    name:'Mr.B',
                    age:'22',
                   nickName:'B',
                   editing:false
                }
             ]
        }
        this.addToEnd = this.addToEnd.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
        this.editHandler = this.editHandler.bind(this)
        this.CancelHandler = this.CancelHandler.bind(this)
        this.SaveHandler = this.SaveHandler.bind(this)
    }
    
    addToEnd() {
        const nextId = this.state.todoCounter+1
        const newName = this.state.name
        const newAge = this.state.age
        const newNickName = this.state.nickName

        
        const newList =[...this.state.Personlist,
            {id: nextId, name: newName,age:newAge,nickName:newNickName,editing:false},
          ]
        this.setState({
          Personlist: newList,
          todoCounter: nextId,
        })
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
        deleteHandler(id){
            for (var i =0;i<this.state.Personlist.length;i++){
                if (this.state.Personlist[i].id===id){
                    //alert(`ID:${id}I:${i}`)
                    this.setState({
                        Personlist:[
                            ...this.state.Personlist.slice(0, i),
                            ...this.state.Personlist.slice(i + 1)
                        ]
                    }
                    )
                }
            }
        }
        editHandler(id){
            for (var i =0;i<this.state.Personlist.length;i++){
                if (this.state.Personlist[i].id===id){
                    // alert(`Editing ID:${id}  Index:${i}`)
                    this.state.Personlist[i].editing=true
                    this.setState({
                        
                    }
                    )
                }
            }
        }
        CancelHandler(id){
            for (var i =0;i<this.state.Personlist.length;i++){
                if (this.state.Personlist[i].id===id){
                    // alert(`Cancel ID:${id}  Index:${i}`)
                    this.state.Personlist[i].editing=false
                    this.setState({
                        
                    }
                    )
                }
            }
        }
        SaveHandler(id,name,age,nickName){
            for (var i =0;i<this.state.Personlist.length;i++){
                if (this.state.Personlist[i].id===id){
                    // alert(`Save ID:${id}  Index:${i}`)
                    this.state.Personlist[i].editing=false
                    this.state.Personlist[i].name=name
                    this.state.Personlist[i].age=age
                    this.state.Personlist[i].nickName=nickName
                    this.setState({
                        
                    }
                    )
                }
            }
        }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>NickName</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <ContentTable Personlist={this.state.Personlist} 
                    deleteHandler={this.deleteHandler} editHandler={this.editHandler} 
                    CancelHandler={this.CancelHandler} SaveHandler={this.SaveHandler}
                    />
                </table>
                <br></br>
                
                <br></br>
                <label>Name </label>
                <input type='text' value={this.state.name} onChange={this.nameChangeHandler}></input>
                <br></br>
                <label>Age </label>
                <select value={this.state.age} onChange={this.selectChange}>
                    {
                         [...Array(60).keys()].map((num,index)=>
                             <option key={index}>{num}</option>
                         )
                    }
                </select>
                <br></br>
                <label>NickName </label>
                <input type='text' value={this.state.nickName} onChange={this.nickNameChangeHandler}></input>
                <br></br>
                <br></br>
                <button onClick={this.addToEnd}>Add Row</button>
                {/* <button onClick={()=>console.log(this.state)}>log</button> */}
            </div>
        )
    }
}

export default SanrooTest
