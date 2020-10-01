import React, { Component } from 'react'
import SanrooEditableTable from'./SanrooEditableTable'
class SanrooTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
        <tbody>
            
                {
                    this.props.Personlist.map(object=>
                        object.editing?
                        
                        
                            <SanrooEditableTable key={object.id} object={object}
                            CancelHandler={this.props.CancelHandler} SaveHandler={this.props.SaveHandler}
                            />
                    
                        :
                        //////////////////
                    <tr key={object.id}>
                    <td>{object.name}</td>
                    <td>{object.age}</td>
                    <td>{object.nickName}</td>
                    <td>
                        <button onClick={()=>this.props.editHandler(object.id)}>Edit</button>
                        <button onClick={()=>this.props.deleteHandler(object.id)}>Remove</button>
                    </td>
                    </tr>
                    )
                }
            
        </tbody>
        )
    }
}

export default SanrooTable
