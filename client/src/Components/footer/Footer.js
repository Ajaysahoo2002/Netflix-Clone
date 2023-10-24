import React from 'react';
import "./footer.css";
const footer = () => {
    return (
        <div>
            {/* <!-- <footer> --> */}
            <div className="footer">
                <h3>Questions? Call 000-800-919-1694</h3>
                <div className="row">
                    <div className="col">
                        <a href="/">FAQ</a>
                        <a href="/">Help Centre</a>
                        <a href="/">Terms of Use</a>
                        <a href="/">Privacy</a>
                        <a href="/">Cookie Preferences</a>
                        <a href="/">Corporate Information</a>
                    </div>
                </div>
                <div className="language">
                    <i className="bi bi-globe"></i>
                    <select name="language" id="lan">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </div>
            {/* <!-- </footer> --> */}
        </div>
    )
}

export default footer
