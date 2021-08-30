import React, { useState } from 'react'

const LoginForm = () => {
    const [form, setState] = useState({
        username: '',
        password: ''
    });

    const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password);
    };

    const updateField = (e) => {
        //username: e.target.username.value , username: e.target.password.value 
        setState({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <form onSubmit={printValues}>
                <label>
                    Username:
                    <input
                        value={form.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        value={form.password}
                        name="password"
                        type="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm
