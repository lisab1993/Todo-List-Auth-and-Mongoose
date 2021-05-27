import React, { useState } from 'react'


export default function Home(props) {
    const [messageText, setMessageText] = useState('')

    function handleMessageChange(event) {
        setMessageText(event.target.value)
    }
    
    function handleMessageSubmit(event){
        event.preventDefault()
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: messageText, complete: false })  
        }
        fetch('/postTodo', options)
        .then(res => res.json())
    }

    return(
        <div>
            <form onSubmit={handleMessageSubmit}>
                <label>
                    Enter Todo Item:
                    <input 
                    type="text"
                    value={messageText}
                    onChange={handleMessageChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
}