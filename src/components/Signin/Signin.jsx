import { useEffect, useState } from "react";
import { users } from "../../apis/api";
import './Signin.scss'

const Signin = ({ connectedUser }) => {
    if (connectedUser) {
        location.href = "/"
    }
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await users.login(formData)
            location.href = "/"
        } catch (error) {
            console.error("Signup error:", error.message);
        }
    };

    useEffect(() => {
    }, []);

    return (
        <div id="Signin">
            <div className="Signin-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        placeholder="write your username or email"
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
