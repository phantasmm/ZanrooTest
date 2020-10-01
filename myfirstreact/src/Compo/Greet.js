import React from 'react'

//function Gree(){
//    return <h1>Hello Draft</h1>
//}

const Gree = (props) => {
//console.log(props)
return (
    <div>
        <h1>Hello {props.name}</h1>
        {props.children}
    </div>
    )
}
export default Gree