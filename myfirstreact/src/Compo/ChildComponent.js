import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHanler('Child')}>Show Parent</button>
        </div>
    )
}

export default ChildComponent
