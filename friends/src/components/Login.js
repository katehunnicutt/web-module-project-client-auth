import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const initialValues = {username: "", password: ""}

const Login = () => {

    const { push } = useHistory()
    const [formValues, setFormValues] = useState(initialValues)

    const handleChanges = e => {
        setFormValues({
            //spread in state
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("https://localhost:5000/api/login", formValues)
        .then(res => {
            //already a string so no need to JSON.stringify 
            window.localStorage.setItem("token", res.data.payload)
            push("/friends")
        })
        .catch(err => console.log({err}))
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
                <input id="username" 
                value={formValues.username}
                name="username"
                type="text"
                placeholder="username"
                onChange={handleChanges}
                />
            <label htmlFor="password">Password</label>
                <input id="password" 
                value={formValues.password}
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChanges}
                />
            <button>Login</button>
        </form>
    )
}

export default Login;