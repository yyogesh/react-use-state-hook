import React, { useEffect } from 'react'

const UseEffectExample1 = ({ name }) => {
    const message = `Hello, ${name}`;

    useEffect(() => {
        document.title = 'Greeting guys'
    }, []);

    //     callback is the callback function containing side-effect logic. useEffect() executes the callback function after React has committed the changes to the screen.
    // dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.

    return (
        <div>
            {message}
        </div>
    )
}

export default UseEffectExample1
