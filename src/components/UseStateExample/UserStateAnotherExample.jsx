import React from 'react'

const UserStateAnotherExample = () => {

    const [messageObj, setMessageObj] = React.useState({ message: '', id: 1 });
    return (
        <div>
            <input type="text" value={messageObj.message} onChange={e => {
                //messageObj.message = e.target.value;
                // console.log(messageObj);
                // const createMessageObj = { message: e.target.value }
                // setMessageObj(prevState => {
                //     return { ...prevState, message: e.target.value }
                // });
                setMessageObj({ ...messageObj, message: e.target.value });
            }} />
            <p>
                {messageObj.id} : {messageObj.message}
            </p>
        </div>
    )
}

export default UserStateAnotherExample
