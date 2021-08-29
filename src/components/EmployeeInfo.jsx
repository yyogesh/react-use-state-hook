import React from 'react'

const EmployeeInfo = ({ city = 'New York', name = "Raj", getEmployeeDetail = () => { } }) => {

    return (
        <div>
            <p> {city || ''}</p>

            <p> {name || ''}</p>

            <button onClick={() => getEmployeeDetail(name)}>Submit</button>

        </div>
    )
}

export default EmployeeInfo
