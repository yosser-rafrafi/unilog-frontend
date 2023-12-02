import { useEffect, useState } from "react";
import { users } from "../../apis/api";
import './Signup.scss'

const Signup = ({ connectedUser }) => {
    if (connectedUser) {
        location.href = "/"
    }
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        role: "Etudiant"
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await users.signup(formData)
            location.href = "/"
        } catch (error) {
            console.error("Signup error:", error.message);
        }
    };

    useEffect(() => {
    }, []);

    return (
        <div id="Signup">
            <div className="Signup-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
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
                    <label htmlFor="role">Role:</label>
                    <select
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}>

                        <option value="Etudiant">Etudiant</option>
                        <option value="Proprietere">Proprietère</option>

                    </select>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
