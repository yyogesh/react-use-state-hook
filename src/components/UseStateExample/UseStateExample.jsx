import { useState } from 'react'

const UseStateExample = () => {

    const [count, setCount] = useState(0);

    const changeCount = (operation) => {
        if (operation === 'add') {
            if (count < 10) setCount(count + 1);
        } else {
            if (count > 0) setCount(count - 1);
        }
    }

    const renderBar = () => {
        const bars = [];
        for (let i = 0; i < count; i++) {
            bars.push(
                <div style={{ backgroundColor: 'rgba(212, 113, 211, 0.3', height: '100%', width: '10%' }} />
            )
        }
        return bars;
    }

    return (
        <div>
            <h1>Use State</h1>
            <p>{count}</p>
            <div style={{ border: '0.1rem solid rgba(0,0,0, 0.3', height: 100, width: '80%', margin: '2rem auto', display: 'flex' }}>
                {renderBar()}
            </div>

            <button onClick={() => changeCount('subtract')}>Subract Bar</button>
            <button onClick={() => changeCount('add')}>Add Bar</button>
        </div>
    )
}

export default UseStateExample
