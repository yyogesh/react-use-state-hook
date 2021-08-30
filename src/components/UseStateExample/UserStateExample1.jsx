import React, { useState } from 'react'

const UserStateExample1 = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    return (
        <div>
            <input
                type="text"
                value={message}
                placeholder="Enter a message"
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
            />
            <input
                type="button"
                value="Add"
                onClick={(e) => {
                    setMessageList([
                        ...messageList,
                        {
                            // Use the current size as ID (needed to iterate the list later)
                            id: messageList.length + 1,
                            message: message
                        }
                    ]);
                    setMessage(""); // Clear the text box
                }}
            />
            <ul>
                {messageList.map(message => <li key={message.id}>{message.message}</li>)}
            </ul>
        </div>
    )
}

export default UserStateExample1
