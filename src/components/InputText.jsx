import React from 'react'

const InputText = ({content,setContent}) => {
    return (
        <div>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
    )
}

export default InputText
