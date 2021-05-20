import React from 'react'

export default function todo({ todo }) {
    const { id, title, completed } = todo
    return (
        
        <div data-testid={`todo-${id}`}>
            {completed ? <strike><h1>{ title }</h1></strike> : <h1>{ title }</h1>}
        </div>
    )
}
