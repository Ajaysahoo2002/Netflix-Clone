import "./login.css";
import logo from '../../Media/logo.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Footer from "../footer/Footer";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please fill all the Credentials!");
        } else {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            });
            const data = await res.json();

            if (res.status === 401 || !data) {
                window.alert("Invalid Credentials!");
            } else {
                window.alert("Login Successful..");
                navigate("/home");
            }
        }
    }


    return (
        <div className='loginPage'>
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="form-wrapper">
                <h2>Sign In</h2>
                <form method="POST" onSubmit={handleLogin}>
                    <div className="form-control">
                        <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <label>Email or Phone number</label><br />
                        {email === "" ? <p>Please enter a valid email address or phone number.</p> : ""}
                    </div>
                    <div className="form-control">
                        <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                        <label>Password</label>
                        <br />
                        {password === "" ? <p>Your password must contain between 6 and 32 characters.</p> : ""}
                    </div>
                    <button type="submit"> Sign In</button>
                    <div className="form-help">
                        <div className="remember-me">
                            <input type="checkbox" name="" id="remember-me" />
                            <label for="remember-me"> Remember-me </label>
                        </div>
                        <a href="/">Need help?</a>
                    </div>
                </form>
                <div className="form-footer">
                    <p>New to Netflix? <a href="/"><b> Sing up now.</b></a></p>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <a href="/">Learn more.</a>
                    </p>
                </div>
            </div>
            {/* Footer Section */}
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}

export default Login
