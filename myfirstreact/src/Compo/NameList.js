import React from 'react'

function NameList() {
    const name=['Hi','Hello','Greeting']
    return (
        <div>
            {
                name.map(object=><h2>{object}</h2>)
            }
        </div>
    )
}

export default NameList
